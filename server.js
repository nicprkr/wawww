const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const CACHE_DIR = path.join(__dirname, 'cache');
const ARTISTS_CACHE_DIR = path.join(CACHE_DIR, 'artists');
const SUBJECTS_CACHE_DIR = path.join(CACHE_DIR, 'subjects');

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Serve static files (optional - comment out if serving frontend separately)
app.use(express.static(__dirname));

// Ensure cache directories exist
async function ensureCacheDirs() {
    try {
        await fs.mkdir(CACHE_DIR, { recursive: true });
        await fs.mkdir(ARTISTS_CACHE_DIR, { recursive: true });
        await fs.mkdir(SUBJECTS_CACHE_DIR, { recursive: true });
        console.log('Cache directories initialized');
    } catch (error) {
        console.error('Error creating cache directories:', error);
    }
}

// Cache helper functions
function normalizeCacheKey(key) {
    // Normalize key for filesystem (remove special chars, spaces, etc.)
    return key.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_');
}

async function getCachedData(cacheType, key) {
    try {
        const cacheDir = cacheType === 'artists' ? ARTISTS_CACHE_DIR : SUBJECTS_CACHE_DIR;
        const normalizedKey = normalizeCacheKey(key);
        const cacheFile = path.join(cacheDir, `${normalizedKey}.json`);
        
        const data = await fs.readFile(cacheFile, 'utf8');
        const cached = JSON.parse(data);
        
        // Check if cache has expiration (optional - for now we keep forever)
        console.log(`[CACHE HIT] ${cacheType}/${normalizedKey}`);
        return cached;
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`[CACHE MISS] ${cacheType}/${normalizeCacheKey(key)}`);
        } else {
            console.error(`[CACHE ERROR] ${cacheType}/${normalizeCacheKey(key)}:`, error.message);
        }
        return null;
    }
}

async function saveCachedData(cacheType, key, data) {
    try {
        const cacheDir = cacheType === 'artists' ? ARTISTS_CACHE_DIR : SUBJECTS_CACHE_DIR;
        const normalizedKey = normalizeCacheKey(key);
        const cacheFile = path.join(cacheDir, `${normalizedKey}.json`);
        
        await fs.writeFile(cacheFile, JSON.stringify(data, null, 2));
        console.log(`[CACHE SAVED] ${cacheType}/${normalizedKey}`);
    } catch (error) {
        console.error(`[CACHE SAVE ERROR] ${cacheType}/${normalizeCacheKey(key)}:`, error.message);
    }
}

// Generic cache wrapper for API calls
async function getOrFetch(cacheType, key, fetchFunction, logPrefix = '') {
    // Try cache first
    const cached = await getCachedData(cacheType, key);
    if (cached) {
        console.log(`${logPrefix}[CACHED] Returning cached data for ${key}`);
        return cached;
    }
    
    // Cache miss - fetch from API
    console.log(`${logPrefix}[API CALL] Fetching ${key} from Wikipedia API...`);
    const startTime = Date.now();
    const data = await fetchFunction();
    const duration = Date.now() - startTime;
    
    if (data) {
        // Save to cache
        await saveCachedData(cacheType, key, data);
        console.log(`${logPrefix}[API SUCCESS] Fetched ${key} in ${duration}ms`);
    } else {
        console.log(`${logPrefix}[API FAILED] Failed to fetch ${key}`);
    }
    
    return data;
}

// Hash function to convert date to a number (same as client-side)
function hashDate(dateString) {
    let hash = 5381;
    for (let i = 0; i < dateString.length; i++) {
        hash = ((hash << 5) + hash) + dateString.charCodeAt(i);
    }
    hash = hash ^ (hash >>> 16);
    hash = hash * 0x85ebca6b;
    hash = hash ^ (hash >>> 13);
    hash = hash * 0xc2b2ae35;
    hash = hash ^ (hash >>> 16);
    return Math.abs(hash);
}


// ============================================================================
// WIKIPEDIA FUNCTIONS (FOR ARTISTS AND SUBJECTS)
// ============================================================================

// Fetch Wikipedia page summary (with caching)
async function fetchWikipediaPage(title) {
    const cacheKey = `page_${title}`;
    
    return await getOrFetch('artists', cacheKey, async () => {
    try {
        const encodedTitle = encodeURIComponent(title);
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodedTitle}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            title: data.title,
            extract: data.extract,
            thumbnail: data.thumbnail?.source || null,
            original: data.originalimage?.source || null,
            url: data.content_urls?.desktop?.page || null
        };
    } catch (error) {
            console.error(`[API ERROR] Error fetching Wikipedia page for "${title}":`, error);
        return null;
    }
    }, `[Wikipedia Page: ${title}] `);
}

// Get artist's Wikidata ID from Wikipedia page (with caching)
async function getArtistWikidataId(artistName) {
    const cacheKey = `wikidata_id_${artistName}`;
    
    return await getOrFetch('artists', cacheKey, async () => {
    try {
        const encodedTitle = encodeURIComponent(artistName.replace(/ /g, '_'));
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodedTitle}&prop=pageprops&ppprop=wikibase_item&format=json&origin=*`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) return null;
        
        const data = await response.json();
        const pages = data.query?.pages;
        if (!pages) return null;
        
        const pageId = Object.keys(pages)[0];
            const wikidataId = pages[pageId]?.pageprops?.wikibase_item || null;
            return wikidataId; // Cache the ID itself
    } catch (error) {
            console.error(`[API ERROR] Error fetching Wikidata ID for "${artistName}":`, error);
        return null;
    }
    }, `[Wikidata ID: ${artistName}] `);
}

// Fetch paintings by artist using Wikidata (with caching)
async function fetchPaintingsByArtist(wikidataId, artistName) {
    if (!wikidataId) return null;
    
    const cacheKey = `paintings_${artistName}_${wikidataId}`;
    
    return await getOrFetch('artists', cacheKey, async () => {
    try {
        const query = `
            SELECT ?painting ?paintingLabel ?image WHERE {
                ?painting wdt:P31/wdt:P279* wd:Q3305213 .
                ?painting wdt:P170 wd:${wikidataId} .
                OPTIONAL { ?painting wdt:P18 ?image }
                SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
            }
            LIMIT 50
        `;
        
        const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;
        const response = await fetch(url);
        
        if (!response.ok) return null;
        
        const data = await response.json();
        const bindings = data.results?.bindings || [];
        
            const paintings = bindings.map(item => ({
            title: item.paintingLabel?.value || 'Untitled',
            thumbnail: item.image?.value ? item.image.value.replace(/http:/, 'https:') : null
        }));
            
            return paintings;
    } catch (error) {
            console.error(`[API ERROR] Error fetching paintings for ${artistName}:`, error);
        return null;
    }
    }, `[Wikidata Paintings: ${artistName}] `);
}

// Fetch artwork images (Wikidata first, then MediaWiki fallback) (with caching)
async function fetchArtworkImages(artistName) {
    const cacheKey = `artworks_${artistName}`;
    
    return await getOrFetch('artists', cacheKey, async () => {
    try {
        const wikidataId = await getArtistWikidataId(artistName);
        let artworks = [];
        
        if (wikidataId) {
            artworks = await fetchPaintingsByArtist(wikidataId, artistName);
        }
        
        // Fallback to MediaWiki API if no Wikidata results
        if (!artworks || artworks.length === 0) {
            const encodedName = encodeURIComponent(artistName.replace(/ /g, '_'));
            const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodedName}&prop=images&imlimit=50&format=json&origin=*`;
            
                console.log(`[MediaWiki API] Fetching images for ${artistName}...`);
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                const pages = data.query?.pages;
                const pageId = Object.keys(pages)[0];
                const images = pages[pageId]?.images || [];
                
                // Filter out default wiki images
                const excludeImages = [
                    'OOjs_UI_icon_edit', 'Commons-logo', 'artist-palette', 'kaboodle',
                    'protection-shackle', 'Wiki_letter_w', 'autograph', 'signature', 'p_vip'
                ];
                
                const filteredImages = images
                    .filter(img => !excludeImages.some(exclude => img.title.toLowerCase().includes(exclude.toLowerCase())))
                    .slice(0, 50);
                
                // Fetch image info for thumbnails
                artworks = await Promise.all(
                    filteredImages.map(async (img) => {
                        try {
                            const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(img.title)}&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*`;
                            const imgResponse = await fetch(imgUrl);
                            if (imgResponse.ok) {
                                const imgData = await imgResponse.json();
                                const imgPages = imgData.query?.pages;
                                const imgPageId = Object.keys(imgPages)[0];
                                const imageinfo = imgPages[imgPageId]?.imageinfo?.[0];
                                return {
                                    title: img.title.replace(/^File:/, '').replace(/\.[^.]+$/, ''),
                                        thumbnail: imageinfo?.thumburl || imageinfo?.url || null,
                                        original: imageinfo?.url || imageinfo?.thumburl || null
                                };
                            }
                        } catch (err) {
                            return null;
                        }
                        return null;
                    })
                );
                
                artworks = artworks.filter(a => a && a.thumbnail);
            }
        }
        
        if (!artworks || artworks.length === 0) {
            return { main: null, gallery: [] };
        }
        
        // Filter out invalid images
        const excludeUrls = [
            'upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit',
            'upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo',
            'upload.wikimedia.org/wikipedia/commons/d/d2/600-artist-palette'
        ];
        
        const validArtworks = artworks.filter(a => 
            a.thumbnail && 
            !excludeUrls.some(exclude => a.thumbnail.includes(exclude))
        );
        
        if (validArtworks.length === 0) {
            return { main: null, gallery: [] };
        }
        
        return {
            main: validArtworks[0],
            gallery: validArtworks.slice(1, 7) // Next 6 for gallery
        };
    } catch (error) {
            console.error(`[API ERROR] Error fetching artwork images for ${artistName}:`, error);
        return { main: null, gallery: [] };
        }
    }, `[Artwork Images: ${artistName}] `);
}

// Fetch artist page with artwork preference
async function fetchArtistWithArtwork(artistName) {
    console.log(`[ARTIST FETCH] Starting fetch for: ${artistName}`);
    const artistStartTime = Date.now();
    
    // First get the basic page summary
    const pageData = await fetchWikipediaPage(artistName);
    if (!pageData) {
        console.log(`[ARTIST FETCH] Failed to get page data for: ${artistName}`);
        return null;
    }
    
    // Try to get artwork images
    const artworkData = await fetchArtworkImages(artistName);
    
    // Combine artist data with properly formatted gallery
    const galleryImages = (artworkData?.gallery || []).map(item => ({
        title: item.title || 'Artwork',
        thumbnail: item.thumbnail || null,
        original: item.original || item.thumbnail || null
    }));
    
    const artistDuration = Date.now() - artistStartTime;
    console.log(`[ARTIST FETCH] Completed for ${artistName} in ${artistDuration}ms (${galleryImages.length} gallery images)`);
    
    // Prefer artwork over thumbnail if available, and include gallery
    if (artworkData && artworkData.main) {
        return {
            ...pageData,
            thumbnail: artworkData.main.thumbnail || pageData.thumbnail,
            original: artworkData.main.original || pageData.original,
            gallery: galleryImages
        };
    }
    
    return {
        ...pageData,
        gallery: galleryImages
    };
}

// Fetch a deterministic Wikipedia page based on hash (with caching)
// Uses Wikipedia categories to ensure the same hash always returns the same subject
async function fetchDeterministicWikipediaPage(hash) {
    // Cache key is the hash itself - same hash = same subject
    const cacheKey = `subject_${hash}`;
    
    return await getOrFetch('subjects', cacheKey, async () => {
    try {
            // Categories that typically have articles with images
        const categories = [
                "Category:Mountains",
                "Category:Animals",
                "Category:Buildings",
                "Category:Flowers",
                "Category:Trees",
                "Category:Birds",
                "Category:Fish",
                "Category:Insects",
                "Category:Mammals",
                "Category:Reptiles",
                "Category:Seas",
                "Category:Rivers",
                "Category:Lakes",
                "Category:Islands",
                "Category:Forests",
                "Category:Deserts",
                "Category:Volcanoes",
                "Category:Waterfalls",
                "Category:Castles",
                "Category:Bridges",
                "Category:Monuments",
                "Category:Landmarks",
                "Category:Architecture",
                "Category:Fruits",
                "Category:Vegetables",
                "Category:Fungi",
                "Category:Rocks",
                "Category:Minerals",
                "Category:Gems",
                "Category:Clouds",
                "Category:Stars",
                "Category:Planets",
                "Category:Moons",
                "Category:Galaxies",
                "Category:Nebulae"
            ];
            
            // Use hash to deterministically select a category
        const categoryHash = hash * 37 + 101;
        const categoryIndex = categoryHash % categories.length;
        const selectedCategory = categories[categoryIndex];
        
            // Use hash to deterministically select which article from the category
        const articleHash = hash * 73 + 151;
        
            // Cache category members to avoid repeated API calls
            const categoryCacheKey = `category_${selectedCategory}`;
            let members = await getCachedData('subjects', categoryCacheKey);
            
            if (!members) {
                console.log(`[Category API] Fetching members for ${selectedCategory}...`);
        const apiUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=categorymembers&cmtitle=${encodeURIComponent(selectedCategory)}&cmlimit=100&cmnamespace=0&format=json`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch category members');
        }
        
        const data = await response.json();
                members = data.query?.categorymembers || [];
                
                // Cache the category members
                await saveCachedData('subjects', categoryCacheKey, members);
                console.log(`[Category API] Cached ${members.length} members for ${selectedCategory}`);
            } else {
                console.log(`[Category CACHE] Using cached members for ${selectedCategory} (${members.length} members)`);
            }
        
        if (members.length === 0) {
            throw new Error('No category members found');
        }
        
            // Use hash to select a specific article from the category
        const articleIndex = Math.abs(articleHash) % members.length;
        const selectedArticle = members[articleIndex];
        
            console.log(`[Subject Selection] Selected article ${articleIndex + 1}/${members.length} from ${selectedCategory}: ${selectedArticle.title}`);
            
            // Fetch the full page details for the selected article
        const pageResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(selectedArticle.title)}`);
        
        if (!pageResponse.ok) {
                // If this article doesn't have a summary, try a few nearby ones
            for (let offset = 1; offset <= 5; offset++) {
                const nextIndex = (articleIndex + offset) % members.length;
                const nextArticle = members[nextIndex];
                const nextResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nextArticle.title)}`);
                
                if (nextResponse.ok) {
                    const nextData = await nextResponse.json();
                    if (nextData.thumbnail?.source || nextData.originalimage?.source) {
                        return {
                            title: nextData.title,
                            extract: nextData.extract,
                            thumbnail: nextData.thumbnail?.source || null,
                            original: nextData.originalimage?.source || null,
                            url: nextData.content_urls?.desktop?.page || null,
                            gallery: []
                        };
                    }
                }
            }
            throw new Error('Failed to fetch article with image');
        }
        
        const pageData = await pageResponse.json();
        
            // Ensure the article has an image
        if (!pageData.thumbnail?.source && !pageData.originalimage?.source) {
                // Try nearby articles until we find one with an image
            for (let offset = 1; offset <= 10; offset++) {
                const nextIndex = (articleIndex + offset) % members.length;
                const nextArticle = members[nextIndex];
                const nextResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nextArticle.title)}`);
                
                if (nextResponse.ok) {
                    const nextData = await nextResponse.json();
                    if (nextData.thumbnail?.source || nextData.originalimage?.source) {
                        return {
                            title: nextData.title,
                            extract: nextData.extract,
                            thumbnail: nextData.thumbnail?.source || null,
                            original: nextData.originalimage?.source || null,
                            url: nextData.content_urls?.desktop?.page || null,
                            gallery: []
                        };
                    }
                }
            }
            throw new Error('No article with image found in category');
        }
        
        return {
            title: pageData.title,
            extract: pageData.extract,
            thumbnail: pageData.thumbnail?.source || null,
            original: pageData.originalimage?.source || null,
            url: pageData.content_urls?.desktop?.page || null,
                gallery: []  // No subject gallery images
            };
        } catch (error) {
            console.error(`[API ERROR] Error fetching deterministic Wikipedia page (hash: ${hash}):`, error);
            // Fallback to random page if category method fails
            try {
                for (let attempt = 0; attempt < 20; attempt++) {
                    const response = await fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary');
                    if (response.ok) {
                        const data = await response.json();
                        if (data.thumbnail?.source || data.originalimage?.source) {
                            return {
                                title: data.title,
                                extract: data.extract,
                                thumbnail: data.thumbnail?.source || null,
                                original: data.originalimage?.source || null,
                                url: data.content_urls?.desktop?.page || null,
            gallery: []
        };
                        }
                    }
                }
            } catch (fallbackError) {
                console.error('[API ERROR] Fallback also failed:', fallbackError);
            }
        return null;
    }
    }, `[Subject (hash: ${hash})] `);
}

// Main endpoint: Get daily prompt for a date
app.get('/api/prompt/:date', async (req, res) => {
    const startTime = Date.now();
    try {
        const dateParam = req.params.date; // Format: YYYY-MM-DD
        console.log(`\n[REQUEST] GET /api/prompt/${dateParam}`);
        const cacheFile = path.join(CACHE_DIR, `${dateParam}.json`);
        
        // Check cache first
        try {
            const cached = await fs.readFile(cacheFile, 'utf8');
            const cachedData = JSON.parse(cached);
            const duration = Date.now() - startTime;
            console.log(`[PROMPT CACHE HIT] Date: ${dateParam} (${duration}ms)`);
            return res.json(cachedData);
        } catch (error) {
            // Cache miss - continue to fetch
            console.log(`[PROMPT CACHE MISS] Date: ${dateParam}, fetching from Wikipedia...`);
        }
        
        // Load artists list
        const scriptContent = await fs.readFile(path.join(__dirname, 'script.js'), 'utf8');
        const artistsMatch = scriptContent.match(/const artists = \[([\s\S]*?)\];/);
        if (!artistsMatch) {
            return res.status(500).json({ error: 'Could not parse artists list' });
        }
        
        const artistsStr = artistsMatch[1];
        const artists = [];
        let current = '';
        let inQuotes = false;
        let quoteChar = '';
        
        for (let i = 0; i < artistsStr.length; i++) {
            const char = artistsStr[i];
            if ((char === '"' || char === "'") && (i === 0 || artistsStr[i-1] !== '\\')) {
                if (!inQuotes) {
                    inQuotes = true;
                    quoteChar = char;
                } else if (char === quoteChar) {
                    inQuotes = false;
                    quoteChar = '';
                }
                current += char;
            } else if (char === ',' && !inQuotes) {
                const trimmed = current.trim().replace(/^["']|["']$/g, '');
                if (trimmed) artists.push(trimmed);
                current = '';
            } else {
                current += char;
            }
        }
        if (current.trim()) {
            const trimmed = current.trim().replace(/^["']|["']$/g, '');
            if (trimmed) artists.push(trimmed);
        }
        
        // Generate hash for date
        const dateHash = hashDate(dateParam);
        
        // Select artist
        const artistHash = dateHash * 31 + 17;
        const artistIndex = artistHash % artists.length;
        const artistName = artists[artistIndex];
        
        console.log(`[ARTIST SELECTION] Date: ${dateParam}, Hash: ${dateHash}, Index: ${artistIndex}, Artist: ${artistName}`);
        
        // Fetch data (using Wikipedia for both artists and subjects)
        console.log(`[FETCHING] Starting parallel fetch for artist and subject...`);
        const fetchStartTime = Date.now();
        const [artistData, subjectData] = await Promise.all([
            fetchArtistWithArtwork(artistName),
            fetchDeterministicWikipediaPage(dateHash)
        ]);
        const fetchDuration = Date.now() - fetchStartTime;
        console.log(`[FETCHING] Completed in ${fetchDuration}ms`);
        
        // Prepare response
        const response = {
            date: dateParam,
            artist: artistData ? {
                name: artistName,
                ...artistData
            } : {
                name: artistName,
                title: artistName,
                extract: 'Artist information unavailable.',
                gallery: []
            },
            subject: subjectData,
            prompt: `${subjectData?.title || '[Subject]'} in the style of ${artistData?.title || artistName}`
        };
        
        // Save to cache
        try {
            await fs.writeFile(cacheFile, JSON.stringify(response, null, 2));
            console.log(`[PROMPT CACHE SAVED] Date: ${dateParam}`);
        } catch (error) {
            console.error(`[CACHE ERROR] Error caching data for ${dateParam}:`, error);
        }
        
        const totalDuration = Date.now() - startTime;
        console.log(`[REQUEST COMPLETE] Date: ${dateParam}, Total time: ${totalDuration}ms\n`);
        res.json(response);
    } catch (error) {
        console.error('Error in /api/prompt:', error);
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Handle favicon requests to prevent 404 errors
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

// Proxy endpoint for AIC images to bypass CORS
app.get('/api/image-proxy', async (req, res) => {
    try {
        const imageUrl = req.query.url;
        
        if (!imageUrl) {
            return res.status(400).json({ error: 'Missing url parameter' });
        }
        
        // Validate that the URL is from Art Institute of Chicago
        if (!imageUrl.startsWith('https://www.artic.edu/iiif/2/')) {
            return res.status(400).json({ error: 'Invalid image URL' });
        }
        
        // Fetch the image from AIC
        const response = await fetch(imageUrl);
        
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch image' });
        }
        
        // Get the image data
        const imageBuffer = await response.arrayBuffer();
        const contentType = response.headers.get('content-type') || 'image/jpeg';
        
        // Set CORS headers and serve the image
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
        res.send(Buffer.from(imageBuffer));
    } catch (error) {
        console.error('Error proxying image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Initialize and start server
async function startServer() {
    await ensureCacheDirs();
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log(`Cache directories:`);
        console.log(`  - Main cache: ${CACHE_DIR}`);
        console.log(`  - Artists cache: ${ARTISTS_CACHE_DIR}`);
        console.log(`  - Subjects cache: ${SUBJECTS_CACHE_DIR}`);
    });
}

startServer();

