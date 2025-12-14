// List of visual artists - painters, sketchers, printmakers (excluding conceptual, performance, and sculpture artists)
const artists = [
    "Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Salvador Dalí", "Frida Kahlo",
    "Leonardo da Vinci", "Andy Warhol", "Georgia O'Keeffe", "Jackson Pollock", "Henri Matisse",
    "Wassily Kandinsky", "Gustav Klimt", "Edvard Munch", "Paul Cézanne", "Edgar Degas",
    "René Magritte", "Marc Chagall", "Yayoi Kusama", "Jean-Michel Basquiat", "Banksy",
    "Takashi Murakami", "David Hockney", "Keith Haring", "Diego Rivera", "Pierre-Auguste Renoir",
    "Edward Hopper", "Johannes Vermeer", "Hieronymus Bosch", "Rembrandt",
    "Caravaggio", "Francisco Goya", "J.M.W. Turner", "Albrecht Dürer", "Henri de Toulouse-Lautrec",
    "Mary Cassatt", "Gustave Courbet", "Édouard Manet", "Georges Seurat", "Paul Gauguin",
    "Francis Bacon", "Willem de Kooning", "Mark Rothko", "Roy Lichtenstein", "Claude Lorrain",
    "Jan van Eyck", "Peter Paul Rubens", "Diego Velázquez", "Titian", "Raphael",
    "Botticelli", "Giotto", "El Greco", "Canaletto",
    "Giovanni Bellini", "Tintoretto", "Veronese", "Annibale Carracci", "Guido Reni",
    "Artemisia Gentileschi", "John Singer Sargent", "Winslow Homer", "Thomas Eakins", "James McNeill Whistler",
    "Egon Schiele", "Oskar Kokoschka", "Amedeo Modigliani", "Paul Klee", "Joan Miró",
    "Max Ernst", "Francis Picabia", "Kurt Schwitters", "Man Ray",
    "Helen Frankenthaler", "Clyfford Still", "Barnett Newman", "Ad Reinhardt",
    "Agnes Martin", "Frank Stella", "Ellsworth Kelly", "Jasper Johns",
    "Robert Rauschenberg", "Cy Twombly", "Richard Diebenkorn", "Wayne Thiebaud", "Alex Katz",
    "Chuck Close", "Philip Guston", "Franz Kline", "Arshile Gorky", "Mark Tobey",
    "Morris Louis", "Kenneth Noland", "Hans Hofmann", "Marsden Hartley", "Hilma af Klint",
    "Arthur Dove", "Grant Wood", "Thomas Hart Benton", "John Steuart Curry", "Norman Rockwell",
    "N.C. Wyeth", "Andrew Wyeth", "Jamie Wyeth", "John James Audubon", "George Catlin",
    "Frederic Remington", "Albert Bierstadt", "Thomas Cole", "Frederic Church",
    "Julie Mehretu", "George Inness", "William Merritt Chase", "Childe Hassam", "Maurice Prendergast",
    "Ernest Lawson", "Robert Henri", "George Bellows", "Charles Sheeler", "John Marin",
    "Alfred Stieglitz", "Charles Demuth", "Ben Shahn", "Jacob Lawrence", "Romare Bearden",
    "Faith Ringgold", "Kara Walker", "Julian Schnabel", "Emily Carr", "Eric Fischl",
    "Sherrie Levine", "Barbara Kruger", "Jenny Holzer",
    "Mickalene Thomas", "Kehinde Wiley", "Amy Sherald", "Titus Kaphar",
    "Kerry James Marshall", "Mark Bradford", "Julie Mehretu", "Yinka Shonibare",
    "William Kentridge", "Gerhard Richter", "Sigmar Polke", "Jay DeFeo",
    "Neo Rauch", "Daniel Richter", "Peter Doig", "Marlene Dumas", "Luc Tuymans",
    "Lawren Harris", "Chris Ofili", "Glenn Brown", "Sofonisba Anguissola", "Lisa Yuskavage",
    "Elizabeth Peyton", "Francesco Clemente", "Sandro Chia", "Enzo Cucchi", "Joaquin Sorolla",
    "Emilio Vedova", "Alberto Burri", "Lucio Fontana",
    "Sam Francis", "Joan Mitchell", "Grace Hartigan", "Elaine de Kooning",
    "Lee Krasner", "Alma Thomas", "Loïs Mailou Jones", "Betye Saar",
    "Bisa Butler", "Njideka Akunyili Crosby", "Toyin Ojih Odutola", "Lynette Yiadom-Boakye", "Hurvin Anderson",
    "Ibrahim El-Salahi", "Kamala Ibrahim Ishag", "Ahmed Shibrain", "Rashid Diab",
    "Giacomo Balla", "Carlo Carrà", "Mario Sironi", "Ardengo Soffici",
    "László Moholy-Nagy", "El Lissitzky", "Kazimir Malevich", "Alexander Rodchenko",
    "Lyubov Popova", "Natalia Goncharova", "Mikhail Larionov", "Robert Delaunay", "Sonia Delaunay",
    "Fernand Léger", "Albert Gleizes", "Jean Metzinger", "Juan Gris", "Georges Braque",
    "Henri Rousseau", "Chaim Soutine", "Moise Kisling", "Jules Pascin", "Tsuguharu Foujita",
    "Leonor Fini", "Remedios Varo", "Leonora Carrington", "Dorothea Tanning", "Kay Sage",
    "Meret Oppenheim", "Cecily Brown", "Hannah Höch", "Raoul Hausmann", "John Heartfield",
    "George Grosz", "Otto Dix", "Max Beckmann", "Käthe Kollwitz", "Ernst Ludwig Kirchner",
    "Emil Nolde", "Max Pechstein", "Karl Schmidt-Rottluff", "Erich Heckel", "Otto Mueller",
    "Franz Marc", "August Macke", "Gabriele Münter", "Alexej von Jawlensky", "Lyonel Feininger",
    "Georg Baselitz", "Anselm Kiefer", "Hokusai", "Utamaro", "Hiroshige",
    "William Blake", "Honoré Daumier", "James Ensor",
    "Correggio", "Parmigianino", "Andrea Mantegna", "Piero della Francesca", "Masaccio",
    "Fra Angelico", "Luca Signorelli", "Perugino", "Andrea del Sarto", "Pontormo",
    "Bronzino", "Domenico Ghirlandaio", "Filippino Lippi", "Filippo Lippi", "Benozzo Gozzoli",
    "Pisanello", "Gentile da Fabriano", "Antonello da Messina", "Carlo Crivelli", "Vittore Carpaccio",
    "Giorgione", "Lorenzo Lotto", "Sebastiano del Piombo", "Jacopo Bassano", "Federico Barocci",
    "Domenichino", "Guercino", "Orazio Gentileschi", "Mattia Preti", "Carlo Saraceni",
    "Jusepe de Ribera", "Francisco de Zurbarán", "Bartolomé Esteban Murillo", "Alonso Cano", "Juan de Valdés Leal",
    "Nicolas Poussin", "Antoine Watteau", "Jean-Honoré Fragonard", "Jean-Baptiste-Siméon Chardin", "Élisabeth Vigée Le Brun",
    "Jacques-Louis David", "Jean-Auguste-Dominique Ingres", "Théodore Géricault", "Eugène Delacroix", "Camille Corot",
    "Jean-François Millet", "Camille Pissarro", "Alfred Sisley", "Berthe Morisot", "Édouard Vuillard",
    "Pierre Bonnard", "Maurice Denis", "Paul Sérusier", "Odilon Redon", "Gustave Moreau",
    "Puvis de Chavannes", "Joaquín Sorolla", "Ignacio Zuloaga", "Jules Bastien-Lepage", "Alphonse Mucha",
    "Richard Gerstl", "Alfred Kubin", "Max Klinger", "Arnold Böcklin", "Hans Thoma",
    "Anselm Feuerbach", "Franz von Lenbach", "Wilhelm Leibl", "Adolph Menzel", "Max Liebermann",
    "Lovis Corinth", "Max Slevogt", "Marianne von Werefkin", "Heinrich Campendonk", "Tamara de Lempicka",
    "Maria Izquierdo", "Olga Rozanova", "Aleksandra Ekster", "Nadezhda Udaltsova", "Varvara Stepanova",
    "Vladimir Tatlin", "Naum Gabo", "Antoine Pevsner", "Theo van Doesburg", "Piet Mondrian",
    "Bart van der Leck", "Vilmos Huszár", "Gerrit Rietveld", "J.J.P. Oud", "André Derain",
    "Maurice de Vlaminck", "Raoul Dufy", "Kees van Dongen", "Henri Manguin", "Charles Camoin",
    "Louis Valtat", "Jean Puy", "Albert Marquet", "Othon Friesz", "Georges Rouault",
    "Séraphine Louis", "Judith Leyster", "Camille Bombois", "Louis Vivin", "Jean Dubuffet",
    "Aloïse Corbaz", "Adolf Wölfli", "Augustin Lesage", "Horace Pippin", "Élisabeth Louise Vigée Le Brun",
    "James Castle", "Martin Ramirez", "Henry Darger", "Howard Finster", "Eddie Arning",
    "Felipe Jesus Consalvos", "Joseph Yoakum", "Willie Cole", "Purvis Young", "Sister Gertrude Morgan",
    "Minnie Evans", "Clementine Hunter", "Mose Tolliver", "Thornton Dial", "Lonnie Holley",
    "Joe Light", "Jimmy Lee Sudduth", "Lascaux", "Mary T. Smith", "Annie Hooper",
    "Royal Robertson", "Eddie Owens Martin", "George Widener", "Wifredo Lam", "Roberto Matta",
    "André Masson", "Yves Tanguy", "Sophie Taeuber-Arp", "Jean Arp", "Thom Thompson"
];

// Hash function to convert date to a number with better distribution
function hashDate(date) {
    // Normalize date to YYYY-MM-DD format without timezone conversion issues
    // Use local date components to ensure consistent hashing regardless of timezone
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    let hash = 5381; // DJB2 hash starting value
    
    for (let i = 0; i < dateString.length; i++) {
        hash = ((hash << 5) + hash) + dateString.charCodeAt(i);
    }
    
    // Additional mixing for better distribution
    hash = hash ^ (hash >>> 16);
    hash = hash * 0x85ebca6b;
    hash = hash ^ (hash >>> 13);
    hash = hash * 0xc2b2ae35;
    hash = hash ^ (hash >>> 16);
    
    return Math.abs(hash);
}

// ============================================================================
// ART INSTITUTE OF CHICAGO API FUNCTIONS (COMMENTED OUT - REVERTED TO WIKIPEDIA)
// ============================================================================

/*
// Search for artist by name in Art Institute of Chicago API
async function searchAICArtist(artistName) {
    try {
        const encodedName = encodeURIComponent(artistName);
        const url = `https://api.artic.edu/api/v1/artists/search?q=${encodedName}&limit=5`;
        console.log('Searching for artist:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! status: ${response.status}`, errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Artist search response:', data);
        const artists = data.data || [];
        
        if (artists.length === 0) {
            console.log(`No artists found for "${artistName}"`);
            return null;
        }
        
        // Try to find exact match first, then use first result
        const exactMatch = artists.find(a => 
            a.title?.toLowerCase() === artistName.toLowerCase()
        );
        
        const selectedArtist = exactMatch || artists[0];
        console.log(`Selected artist:`, selectedArtist);
        return selectedArtist;
    } catch (error) {
        console.error(`Error searching AIC for artist "${artistName}":`, error);
        return null;
    }
}

// Fetch artworks by artist ID from Art Institute of Chicago
async function fetchAICArtworks(artistId, limit = 20) {
    try {
        // The search endpoints don't seem to work, so we'll fetch artworks and filter by artist_ids
        // Fetch a larger batch and filter client-side
        console.log(`Fetching artworks and filtering by artist ID ${artistId}...`);
        
        try {
            // Fetch more artworks to increase chances of finding artist's works
            // Try fetching 500 artworks first
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?limit=500&fields=id,title,image_id,artist_ids`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            const config = data.config || {};
            const iiifUrl = config.iiif_url || 'https://www.artic.edu/iiif/2';
            const allArtworks = data.data || [];
            
            console.log(`Fetched ${allArtworks.length} total artworks, filtering for artist ${artistId}...`);
            
            // Debug: Check structure of artist_ids in first few artworks
            if (allArtworks.length > 0) {
                console.log('Sample artwork artist_ids structure:', allArtworks.slice(0, 3).map(a => ({
                    id: a.id,
                    title: a.title,
                    artist_ids: a.artist_ids,
                    artist_id: a.artist_id
                })));
            }
            
            // Filter artworks that belong to this artist
            const artistIdNum = parseInt(artistId);
            const filteredArtworks = allArtworks.filter(artwork => {
                // Try multiple ways to access artist IDs
                const artworkArtistIds = artwork.artist_ids || 
                                       (artwork.artist_id ? [artwork.artist_id] : []) ||
                                       (artwork.artist_titles ? [] : []); // artist_titles might exist but not help
                
                // Check if any artist ID matches
                const matches = artworkArtistIds.some(id => {
                    const idNum = parseInt(id);
                    return idNum === artistIdNum || id === artistId || id === artistId.toString();
                });
                
                return matches;
            });
            
            console.log(`Found ${filteredArtworks.length} artworks for artist ${artistId} out of ${allArtworks.length} total`);
            
            // If no matches, try fetching more pages
            if (filteredArtworks.length === 0) {
                console.log('No matches found, trying additional pages...');
                for (let page = 2; page <= 5; page++) {
                    try {
                        const pageResponse = await fetch(`https://api.artic.edu/api/v1/artworks?limit=100&page=${page}&fields=id,title,image_id,artist_ids`);
                        if (pageResponse.ok) {
                            const pageData = await pageResponse.json();
                            const pageArtworks = pageData.data || [];
                            console.log(`Fetched page ${page}: ${pageArtworks.length} artworks`);
                            
                            if (pageArtworks.length === 0) break; // No more pages
                            
                            const pageFiltered = pageArtworks.filter(artwork => {
                                const artworkArtistIds = artwork.artist_ids || (artwork.artist_id ? [artwork.artist_id] : []);
                                return artworkArtistIds.some(id => {
                                    const idNum = parseInt(id);
                                    return idNum === artistIdNum || id === artistId || id === artistId.toString();
                                });
                            });
                            
                            if (pageFiltered.length > 0) {
                                console.log(`Found ${pageFiltered.length} artworks in page ${page}`);
                                filteredArtworks.push(...pageFiltered);
                                if (filteredArtworks.length >= limit) break; // We have enough
                            }
                        }
                    } catch (pageError) {
                        console.warn(`Error fetching page ${page}:`, pageError);
                        break; // Stop if we hit an error
                    }
                }
            }
            
            if (filteredArtworks.length === 0) {
                console.warn(`No artworks found for artist ${artistId} after filtering`);
                return [];
            }
            
            // Limit to requested amount
            const artworksToUse = filteredArtworks.slice(0, limit).filter(a => a.image_id);
            console.log(`Using ${artworksToUse.length} artworks with images for artist ${artistId}`);
                
            // Convert AIC image IDs to URLs using the IIIF URL from config
            // Check if we should use proxy (client-side only, server doesn't need proxy)
            const useProxy = typeof window !== 'undefined' && API_BASE_URL;
            const baseUrl = useProxy ? API_BASE_URL : '';
            
            const processedArtworks = artworksToUse.map(artwork => {
                const imageId = artwork.image_id;
                const thumbnailUrl = `${iiifUrl}/${imageId}/full/300,/0/default.jpg`;
                const originalUrl = `${iiifUrl}/${imageId}/full/843,/0/default.jpg`;
                
                return {
                    title: artwork.title || 'Untitled',
                    thumbnail: useProxy ? `${baseUrl}/api/image-proxy?url=${encodeURIComponent(thumbnailUrl)}` : thumbnailUrl,
                    original: useProxy ? `${baseUrl}/api/image-proxy?url=${encodeURIComponent(originalUrl)}` : originalUrl
                };
            });
            
            console.log(`Processed ${processedArtworks.length} artworks with images for artist ${artistId}`);
            if (processedArtworks.length > 0) {
                console.log('First artwork:', processedArtworks[0]);
                return processedArtworks;
            }
            
            return [];
        } catch (error) {
            console.error(`Error fetching and filtering artworks for artist ID ${artistId}:`, error);
            return [];
        }
    } catch (error) {
        console.error(`Error fetching AIC artworks for artist ID ${artistId}:`, error);
        return [];
    }
}

// Fetch full artist details by ID from Art Institute of Chicago
async function fetchAICArtistDetails(artistId) {
    try {
        const response = await fetch(`https://api.artic.edu/api/v1/artists/${artistId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.data || null;
    } catch (error) {
        console.error(`Error fetching AIC artist details for ID ${artistId}:`, error);
        return null;
    }
}

// Fetch artist with artworks from Art Institute of Chicago
async function fetchAICArtistWithArtwork(artistName) {
    try {
        console.log(`Fetching AIC artist with artwork for: ${artistName}`);
        
        // Search for artist
        const artist = await searchAICArtist(artistName);
        if (!artist) {
            console.log(`No artist found for "${artistName}"`);
            return null;
        }
        
        // Get artist ID and fetch full details
        const artistId = artist.id;
        console.log(`Found artist ID: ${artistId}`);
        const artistDetails = await fetchAICArtistDetails(artistId);
        
        // Use full details if available, otherwise use search result
        const fullArtist = artistDetails || artist;
        const artistTitle = fullArtist.title || artistName;
        
        // Build biography from available fields
        let artistBio = '';
        const bioParts = [];
        
        if (fullArtist.birth_date) {
            bioParts.push(`Born ${fullArtist.birth_date}`);
        }
        if (fullArtist.death_date) {
            bioParts.push(`died ${fullArtist.death_date}`);
        }
        if (fullArtist.place_of_birth) {
            bioParts.push(`in ${fullArtist.place_of_birth}`);
        }
        if (fullArtist.nationality) {
            bioParts.push(`(${fullArtist.nationality})`);
        }
        
        // Combine bio parts
        if (bioParts.length > 0) {
            artistBio = bioParts.join(' ');
        }
        
        // Add description if available
        if (fullArtist.description) {
            if (artistBio) {
                artistBio += '. ' + fullArtist.description;
            } else {
                artistBio = fullArtist.description;
            }
        }
        
        // Fallback if no bio information
        if (!artistBio) {
            artistBio = `Artist from the Art Institute of Chicago collection.`;
            if (fullArtist.birth_date || fullArtist.nationality) {
                artistBio = '';
                if (fullArtist.nationality) {
                    artistBio = `${fullArtist.nationality} artist`;
                }
                if (fullArtist.birth_date) {
                    if (artistBio) {
                        artistBio += `, born ${fullArtist.birth_date}`;
                    } else {
                        artistBio = `Born ${fullArtist.birth_date}`;
                    }
                }
                if (fullArtist.death_date) {
                    artistBio += `, died ${fullArtist.death_date}`;
                }
                artistBio += '.';
            }
        }
        
        // Fetch artworks (fetch more to ensure we have enough for gallery)
        const artworks = await fetchAICArtworks(artistId, 20);
        console.log(`Fetched ${artworks.length} artworks for artist ${artistId} (${artistName})`);
        if (artworks.length > 0) {
            console.log(`First artwork for ${artistName}:`, artworks[0].title, artworks[0].thumbnail);
        }
        
        // Get main image (first artwork or artist image)
        let thumbnail = null;
        let original = null;
        
        if (artworks.length > 0) {
            // Artworks already have proxy URLs if needed
            thumbnail = artworks[0].thumbnail;
            original = artworks[0].original;
            console.log(`Main image URL: ${thumbnail}`);
        } else {
            console.warn(`No artworks found for artist ${artistId}`);
        }
        
        // Build gallery (skip first artwork if it's the main image, take next 6)
        // If we have fewer than 7 artworks total, use all remaining artworks for gallery
        const galleryStartIndex = artworks.length > 1 ? 1 : 0;
        const galleryEndIndex = Math.min(galleryStartIndex + 6, artworks.length);
        const gallery = artworks.slice(galleryStartIndex, galleryEndIndex).map(artwork => ({
            title: artwork.title,
            thumbnail: artwork.thumbnail,
            original: artwork.original
        }));
        
        console.log(`Gallery has ${gallery.length} items`);
        
        const result = {
            title: artistTitle,
            name: artistTitle,
            extract: artistBio || `Artist from the Art Institute of Chicago collection.`,
            thumbnail: thumbnail,
            original: original,
            url: `https://www.artic.edu/artists/${artistId}`,
            gallery: gallery
        };
        
        console.log('Final artist data:', result);
        return result;
    } catch (error) {
        console.error(`Error fetching AIC artist "${artistName}":`, error);
        return null;
    }
}
*/

// ============================================================================
// WIKIPEDIA FUNCTIONS (FOR ARTISTS AND SUBJECTS)
// ============================================================================

// Fetch Wikipedia page summary
async function fetchWikipediaPage(title) {
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
        console.error(`Error fetching Wikipedia page for "${title}":`, error);
        return null;
    }
}

// Get artist's Wikidata ID from Wikipedia page
async function getArtistWikidataId(artistName) {
    try {
        const encodedTitle = encodeURIComponent(artistName.replace(/ /g, '_'));
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodedTitle}&prop=pageprops&ppprop=wikibase_item&format=json&origin=*`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) return null;
        
        const data = await response.json();
        const pages = data.query?.pages;
        if (!pages) return null;
        
        const pageId = Object.keys(pages)[0];
        return pages[pageId]?.pageprops?.wikibase_item || null;
    } catch (error) {
        console.error(`Error fetching Wikidata ID for "${artistName}":`, error);
        return null;
    }
}

// Fetch paintings by artist using Wikidata structured data
async function fetchPaintingsByArtist(wikidataId, artistName) {
    if (!wikidataId) return null;
    
    try {
        // SPARQL query to find paintings created by this artist
        const sparqlQuery = `
            SELECT ?painting ?paintingLabel ?image WHERE {
                ?painting wdt:P31/wdt:P279* wd:Q3305213 .  # Instance of or subclass of painting
                ?painting wdt:P170 wd:${wikidataId} .       # Created by artist
                ?painting wdt:P18 ?image .                  # Has image
                SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }
            }
            LIMIT 10
        `.replace(/\s+/g, ' ').trim();
        
        const encodedQuery = encodeURIComponent(sparqlQuery);
        const sparqlUrl = `https://query.wikidata.org/sparql?query=${encodedQuery}&format=json`;
        
        const response = await fetch(sparqlUrl, {
            headers: {
                'Accept': 'application/sparql-results+json'
            }
        });
        
        if (!response.ok) return null;
        
        const data = await response.json();
        const bindings = data.results?.bindings || [];
        
        if (bindings.length === 0) return null;
        
        // Extract image URLs and convert Commons filenames
        const paintings = bindings
            .map(item => {
                const imageUrl = item.image?.value;
                if (!imageUrl) return null;
                
                // Convert image URL to Commons filename
                // e.g., http://commons.wikimedia.org/wiki/Special:FilePath/File.jpg -> File.jpg
                const filenameMatch = imageUrl.match(/\/([^\/]+)$/);
                if (!filenameMatch) return null;
                
                return filenameMatch[1];
            })
            .filter(Boolean);
        
        return paintings;
    } catch (error) {
        console.error(`Error fetching paintings for Wikidata ID ${wikidataId}:`, error);
        return null;
    }
}

// Fetch images from Wikipedia page using MediaWiki API (for artwork samples)
async function fetchArtworkImages(artistName) {
    try {
        // First, try to get paintings using Wikidata structured data
        const wikidataId = await getArtistWikidataId(artistName);
        let paintingFiles = null;
        
        if (wikidataId) {
            paintingFiles = await fetchPaintingsByArtist(wikidataId, artistName);
            console.log(`Found ${paintingFiles?.length || 0} paintings via Wikidata for ${artistName}`);
        }
        
        // Fallback: Get images from Wikipedia page if Wikidata didn't return enough
        let images = [];
        
        if (paintingFiles && paintingFiles.length > 0) {
            // Use the paintings found via Wikidata
            images = paintingFiles.map(filename => ({
                title: `File:${filename}`
            }));
        } else {
            // Fallback to Wikipedia page images
            const encodedTitle = encodeURIComponent(artistName.replace(/ /g, '_'));
            const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodedTitle}&prop=images&imlimit=50&format=json&origin=*`;
            
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            const pages = data.query?.pages;
            if (!pages) return null;
            
            const pageId = Object.keys(pages)[0];
            images = pages[pageId]?.images || [];
        }
        
        if (images.length === 0) return null;
        
        // Exclude default wiki images (check both filename and URL patterns)
        const excludeImages = [
            'OOjs_UI_icon_edit-ltr-progressive.svg',
            'Commons-logo.svg',
            '600-artist-palette.svg',
            'edit-ltr-progressive',  // Also catch variations
            'commons-logo',
            'artist-palette',
            'kaboodle',
            'fileicon-ogg',
            'Extended-protection-shackle',
            'Wiki_letter_w',
            'protection-shackle',
            'autograph',
            'signature',
            'p_vip',
            'ballerina-icon',
            'flag_of',
            'Edit-clear',
            'Firma_di',
            'Nuvola',
            'Text_document',
            'Ambox',
            'Question_book'
        ];
        
        // Filter out excluded images - check both title and potential URL
        const filteredImages = images.filter(img => {
            const imageTitle = img.title.replace(/^File:/, '').toLowerCase();
            // Check if image title contains any excluded pattern
            const isExcluded = excludeImages.some(excluded => 
                imageTitle.includes(excluded.toLowerCase())
            );
            // Also check for SVG files that are likely icons/logos
            const isSvgIcon = imageTitle.endsWith('.svg') && (
                imageTitle.includes('icon') || 
                imageTitle.includes('logo') ||
                imageTitle.includes('button') ||
                imageTitle.includes('arrow')
            );
            return !isExcluded && !isSvgIcon;
        });
        
        if (filteredImages.length === 0) return null;
        
        // Just use the first image for artist display, and first 6 for gallery
        const firstImage = filteredImages[0];
        const galleryImages = filteredImages.slice(1, 7); // Skip first (main image), take next 6
        
        // Fetch thumbnail for the first (main) image
        let mainImageData = null;
        try {
            const imageTitle = firstImage.title.replace(/^File:/, '');
            const encodedImageTitle = encodeURIComponent(imageTitle);
            const imageInfoUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodedImageTitle}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json&origin=*`;
            
            const imageResponse = await fetch(imageInfoUrl);
            if (imageResponse.ok) {
                const imageData = await imageResponse.json();
                const imagePages = imageData.query?.pages;
                if (imagePages) {
                    const imagePageId = Object.keys(imagePages)[0];
                    const imageInfo = imagePages[imagePageId]?.imageinfo?.[0];
                    if (imageInfo && imageInfo.thumburl) {
                        // Double-check excluded images in the URL
                        const imageUrl = imageInfo.thumburl.toLowerCase();
                        const isExcluded = excludeImages.some(excluded => 
                            imageUrl.includes(excluded.toLowerCase())
                        );
                        const isSvgIcon = imageUrl.includes('.svg') && (
                            imageUrl.includes('icon') || 
                            imageUrl.includes('logo') ||
                            imageUrl.includes('button')
                        );
                        
                        if (!isExcluded && !isSvgIcon) {
                            mainImageData = {
                                thumbnail: imageInfo.thumburl,
                                original: imageInfo.url
                            };
                        }
                    }
                }
            }
        } catch (err) {
            console.error(`Error fetching main image ${firstImage.title}:`, err);
        }
        
        // Fetch thumbnails for gallery images
        const artworkData = [];
        for (const img of galleryImages) {
            try {
                const imageTitle = img.title.replace(/^File:/, '');
                const encodedImageTitle = encodeURIComponent(imageTitle);
                const imageInfoUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodedImageTitle}&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*`;
                
                const imageResponse = await fetch(imageInfoUrl);
                if (imageResponse.ok) {
                    const imageData = await imageResponse.json();
                    const imagePages = imageData.query?.pages;
                    if (imagePages) {
                        const imagePageId = Object.keys(imagePages)[0];
                        const imageInfo = imagePages[imagePageId]?.imageinfo?.[0];
                        if (imageInfo && imageInfo.thumburl) {
                            // Double-check excluded images in the URL
                            const imageUrl = imageInfo.thumburl.toLowerCase();
                            const isExcluded = excludeImages.some(excluded => 
                                imageUrl.includes(excluded.toLowerCase())
                            );
                            const isSvgIcon = imageUrl.includes('.svg') && (
                                imageUrl.includes('icon') || 
                                imageUrl.includes('logo') ||
                                imageUrl.includes('button')
                            );
                            
                            if (!isExcluded && !isSvgIcon) {
                                artworkData.push({
                                    thumbnail: imageInfo.thumburl,
                                    original: imageInfo.url,
                                    title: imageTitle.replace(/\.(jpg|jpeg|png|gif|svg)$/i, '')
                                });
                            }
                        }
                    }
                }
            } catch (err) {
                console.error(`Error fetching image ${img.title}:`, err);
            }
        }
        
        // Return main image and gallery images
        if (mainImageData) {
            return {
                thumbnail: mainImageData.thumbnail,
                original: mainImageData.original,
                gallery: artworkData
            };
        }
        
        // Return first image for main display, and all images for gallery
        if (artworkData.length > 0) {
            return {
                thumbnail: artworkData[0].thumbnail,
                original: artworkData[0].original,
                gallery: artworkData
            };
        }
        
        return null;
    } catch (error) {
        console.error(`Error fetching artwork images for "${artistName}":`, error);
        return null;
    }
}

// Search for additional images using Wikipedia Commons search
async function searchCommonsImages(query, limit = 10) {
    try {
        // Search Commons for images related to the artist
        const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=${limit}`;
        
        const response = await fetch(searchUrl);
        if (!response.ok) return [];
        
        const data = await response.json();
        const searchResults = data.query?.search || [];
        
        // Get image info for each result
        const imageTitles = searchResults.map(result => result.title);
        if (imageTitles.length === 0) return [];
        
        const imageInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&titles=${imageTitles.map(t => encodeURIComponent(t)).join('|')}&prop=imageinfo&iiprop=url&iiurlwidth=300`;
        
        const imageResponse = await fetch(imageInfoUrl);
        if (!imageResponse.ok) return [];
        
        const imageData = await imageResponse.json();
        const pages = imageData.query?.pages || {};
        
        const images = [];
        for (const pageId in pages) {
            const page = pages[pageId];
            const imageinfo = page.imageinfo?.[0];
            if (imageinfo && imageinfo.thumburl) {
                // Filter out default/wiki icons
                const url = imageinfo.thumburl.toLowerCase();
                const excludePatterns = [
                    'oojs_ui_icon', 'commons-logo', 'artist-palette', 'kaboodle',
                    'protection-shackle', 'wiki_letter', 'autograph', 'signature',
                    'p_vip', 'ballerina-icon', 'flag_of', 'edit-clear', 'firma_di', 'nuvola'
                ];
                
                if (!excludePatterns.some(pattern => url.includes(pattern))) {
                    images.push({
                        title: page.title.replace(/^File:/, '').replace(/\.[^.]+$/, ''),
                        thumbnail: imageinfo.thumburl,
                        original: imageinfo.url || imageinfo.thumburl
                    });
                }
            }
        }
        
        return images;
    } catch (error) {
        console.error(`Error searching Commons images for "${query}":`, error);
        return [];
    }
}

// Fetch artist page with artwork preference
async function fetchArtistWithArtwork(artistName) {
    // First get the basic page summary
    const pageData = await fetchWikipediaPage(artistName);
    if (!pageData) return null;
    
    // Try to get artwork images
    const artworkImages = await fetchArtworkImages(artistName);
    
    let gallery = artworkImages?.gallery || [];
    
    // If we have fewer than 6 gallery images, supplement with Commons search
    if (gallery.length < 6) {
        console.log(`Only ${gallery.length} gallery images found, searching Commons for more...`);
        const needed = 6 - gallery.length;
        
        // Try different search queries
        const searchQueries = [
            artistName,
            `${artistName} painting`,
            `${artistName} artwork`,
            `${artistName} art`
        ];
        
        for (const query of searchQueries) {
            if (gallery.length >= 6) break;
            
            const commonsImages = await searchCommonsImages(query, needed * 2);
            
            // Filter out duplicates and add to gallery
            const existingUrls = new Set(gallery.map(img => img.thumbnail?.toLowerCase() || img.original?.toLowerCase()));
            for (const img of commonsImages) {
                if (gallery.length >= 6) break;
                
                const imgUrl = img.thumbnail?.toLowerCase() || img.original?.toLowerCase();
                if (imgUrl && !existingUrls.has(imgUrl)) {
                    gallery.push(img);
                    existingUrls.add(imgUrl);
                }
            }
            
            // Small delay to avoid rate limiting
            if (gallery.length < 6 && searchQueries.indexOf(query) < searchQueries.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }
        
        console.log(`Gallery now has ${gallery.length} images after Commons search`);
    }
    
    // Prefer artwork over thumbnail if available, and include gallery
    if (artworkImages || gallery.length > 0) {
        return {
            ...pageData,
            thumbnail: artworkImages?.thumbnail || pageData.thumbnail,
            original: artworkImages?.original || pageData.original,
            gallery: gallery.slice(0, 6) // Limit to 6 total
        };
    }
    
    return {
        ...pageData,
        gallery: []
    };
}

// Get artist's Wikidata ID from Wikipedia page
async function getArtistWikidataId(artistName) {
    try {
        const encodedTitle = encodeURIComponent(artistName.replace(/ /g, '_'));
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodedTitle}&prop=pageprops&ppprop=wikibase_item&format=json&origin=*`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) return null;
        
        const data = await response.json();
        const pages = data.query?.pages;
        if (!pages) return null;
        
        const pageId = Object.keys(pages)[0];
        return pages[pageId]?.pageprops?.wikibase_item || null;
    } catch (error) {
        console.error(`Error fetching Wikidata ID for "${artistName}":`, error);
        return null;
    }
}

// Fetch paintings by artist using Wikidata structured data
async function fetchPaintingsByArtist(wikidataId, artistName) {
    if (!wikidataId) return null;
    
    try {
        // SPARQL query to find paintings created by this artist
        const sparqlQuery = `
            SELECT ?painting ?paintingLabel ?image WHERE {
                ?painting wdt:P31/wdt:P279* wd:Q3305213 .  # Instance of or subclass of painting
                ?painting wdt:P170 wd:${wikidataId} .       # Created by artist
                ?painting wdt:P18 ?image .                  # Has image
                SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }
            }
            LIMIT 10
        `.replace(/\s+/g, ' ').trim();
        
        const encodedQuery = encodeURIComponent(sparqlQuery);
        const sparqlUrl = `https://query.wikidata.org/sparql?query=${encodedQuery}&format=json`;
        
        const response = await fetch(sparqlUrl, {
            headers: {
                'Accept': 'application/sparql-results+json'
            }
        });
        
        if (!response.ok) return null;
        
        const data = await response.json();
        const bindings = data.results?.bindings || [];
        
        if (bindings.length === 0) return null;
        
        // Extract image URLs and convert Commons filenames
        const paintings = bindings
            .map(item => {
                const imageUrl = item.image?.value;
                if (!imageUrl) return null;
                
                // Convert image URL to Commons filename
                // e.g., http://commons.wikimedia.org/wiki/Special:FilePath/File.jpg -> File.jpg
                const filenameMatch = imageUrl.match(/\/([^\/]+)$/);
                if (!filenameMatch) return null;
                
                return filenameMatch[1];
            })
            .filter(Boolean);
        
        return paintings;
    } catch (error) {
        console.error(`Error fetching paintings for Wikidata ID ${wikidataId}:`, error);
        return null;
    }
}

// Fetch images from Wikipedia page using MediaWiki API (for artwork samples)
async function fetchArtworkImages(artistName) {
    try {
        // First, try to get paintings using Wikidata structured data
        const wikidataId = await getArtistWikidataId(artistName);
        let paintingFiles = null;
        
        if (wikidataId) {
            paintingFiles = await fetchPaintingsByArtist(wikidataId, artistName);
            console.log(`Found ${paintingFiles?.length || 0} paintings via Wikidata for ${artistName}`);
        }
        
        // Fallback: Get images from Wikipedia page if Wikidata didn't return enough
        let images = [];
        
        if (paintingFiles && paintingFiles.length > 0) {
            // Use the paintings found via Wikidata
            images = paintingFiles.map(filename => ({
                title: `File:${filename}`
            }));
        } else {
            // Fallback to Wikipedia page images
            const encodedTitle = encodeURIComponent(artistName.replace(/ /g, '_'));
            const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodedTitle}&prop=images&imlimit=50&format=json&origin=*`;
            
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            const pages = data.query?.pages;
            if (!pages) return null;
            
            const pageId = Object.keys(pages)[0];
            images = pages[pageId]?.images || [];
        }
        
        if (images.length === 0) return null;
        
        // Exclude default wiki images (check both filename and URL patterns)
        const excludeImages = [
            'OOjs_UI_icon_edit-ltr-progressive.svg',
            'Commons-logo.svg',
            '600-artist-palette.svg',
            'edit-ltr-progressive',  // Also catch variations
            'commons-logo',
            'artist-palette',
            'kaboodle',
            'fileicon-ogg',
            'Extended-protection-shackle',
            'Wiki_letter_w',
            'protection-shackle',
            'autograph',
            'signature',
            'p_vip',
            'ballerina-icon',
            'flag_of',
            'Edit-clear',
            'Firma_di',
            'Nuvola',
            'Text_document',
            'Ambox'
        ];
        
        // Filter out excluded images - check both title and potential URL
        const filteredImages = images.filter(img => {
            const imageTitle = img.title.replace(/^File:/, '').toLowerCase();
            // Check if image title contains any excluded pattern
            const isExcluded = excludeImages.some(excluded => 
                imageTitle.includes(excluded.toLowerCase())
            );
            // Also check for SVG files that are likely icons/logos
            const isSvgIcon = imageTitle.endsWith('.svg') && (
                imageTitle.includes('icon') || 
                imageTitle.includes('logo') ||
                imageTitle.includes('button') ||
                imageTitle.includes('arrow')
            );
            return !isExcluded && !isSvgIcon;
        });
        
        if (filteredImages.length === 0) return null;
        
        // Just use the first image for artist display, and first 6 for gallery
        const firstImage = filteredImages[0];
        const galleryImages = filteredImages.slice(1, 7); // Skip first (main image), take next 6
        
        // Fetch thumbnail for the first (main) image
        let mainImageData = null;
        try {
            const imageTitle = firstImage.title.replace(/^File:/, '');
            const encodedImageTitle = encodeURIComponent(imageTitle);
            const imageInfoUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodedImageTitle}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json&origin=*`;
            
            const imageResponse = await fetch(imageInfoUrl);
            if (imageResponse.ok) {
                const imageData = await imageResponse.json();
                const imagePages = imageData.query?.pages;
                if (imagePages) {
                    const imagePageId = Object.keys(imagePages)[0];
                    const imageInfo = imagePages[imagePageId]?.imageinfo?.[0];
                    if (imageInfo && imageInfo.thumburl) {
                        // Double-check excluded images in the URL
                        const imageUrl = imageInfo.thumburl.toLowerCase();
                        const isExcluded = excludeImages.some(excluded => 
                            imageUrl.includes(excluded.toLowerCase())
                        );
                        const isSvgIcon = imageUrl.includes('.svg') && (
                            imageUrl.includes('icon') || 
                            imageUrl.includes('logo') ||
                            imageUrl.includes('button')
                        );
                        
                        if (!isExcluded && !isSvgIcon) {
                            mainImageData = {
                                thumbnail: imageInfo.thumburl,
                                original: imageInfo.url
                            };
                        }
                    }
                }
            }
        } catch (err) {
            console.error(`Error fetching main image ${firstImage.title}:`, err);
        }
        
        // Fetch thumbnails for gallery images
        const artworkData = [];
        for (const img of galleryImages) {
            try {
                const imageTitle = img.title.replace(/^File:/, '');
                const encodedImageTitle = encodeURIComponent(imageTitle);
                const imageInfoUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodedImageTitle}&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*`;
                
                const imageResponse = await fetch(imageInfoUrl);
                if (imageResponse.ok) {
                    const imageData = await imageResponse.json();
                    const imagePages = imageData.query?.pages;
                    if (imagePages) {
                        const imagePageId = Object.keys(imagePages)[0];
                        const imageInfo = imagePages[imagePageId]?.imageinfo?.[0];
                        if (imageInfo && imageInfo.thumburl) {
                            // Double-check excluded images in the URL
                            const imageUrl = imageInfo.thumburl.toLowerCase();
                            const isExcluded = excludeImages.some(excluded => 
                                imageUrl.includes(excluded.toLowerCase())
                            );
                            const isSvgIcon = imageUrl.includes('.svg') && (
                                imageUrl.includes('icon') || 
                                imageUrl.includes('logo') ||
                                imageUrl.includes('button')
                            );
                            
                            if (!isExcluded && !isSvgIcon) {
                                artworkData.push({
                                    thumbnail: imageInfo.thumburl,
                                    original: imageInfo.url,
                                    title: imageTitle.replace(/\.(jpg|jpeg|png|gif|svg)$/i, '')
                                });
                            }
                        }
                    }
                }
            } catch (err) {
                console.error(`Error fetching image ${img.title}:`, err);
            }
        }
        
        // Return main image and gallery images
        if (mainImageData) {
            return {
                thumbnail: mainImageData.thumbnail,
                original: mainImageData.original,
                gallery: artworkData
            };
        }
        
        // Return first image for main display, and all images for gallery
        if (artworkData.length > 0) {
            return {
                thumbnail: artworkData[0].thumbnail,
                original: artworkData[0].original,
                gallery: artworkData
            };
        }
        
        return null;
    } catch (error) {
        console.error(`Error fetching artwork images for "${artistName}":`, error);
        return null;
    }
}

// Search for additional images using Wikipedia Commons search
async function searchCommonsImages(query, limit = 10) {
    try {
        // Search Commons for images related to the artist
        const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=${limit}`;
        
        const response = await fetch(searchUrl);
        if (!response.ok) return [];
        
        const data = await response.json();
        const searchResults = data.query?.search || [];
        
        // Get image info for each result
        const imageTitles = searchResults.map(result => result.title);
        if (imageTitles.length === 0) return [];
        
        const imageInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&titles=${imageTitles.map(t => encodeURIComponent(t)).join('|')}&prop=imageinfo&iiprop=url&iiurlwidth=300`;
        
        const imageResponse = await fetch(imageInfoUrl);
        if (!imageResponse.ok) return [];
        
        const imageData = await imageResponse.json();
        const pages = imageData.query?.pages || {};
        
        const images = [];
        for (const pageId in pages) {
            const page = pages[pageId];
            const imageinfo = page.imageinfo?.[0];
            if (imageinfo && imageinfo.thumburl) {
                // Filter out default/wiki icons
                const url = imageinfo.thumburl.toLowerCase();
                const excludePatterns = [
                    'oojs_ui_icon', 'commons-logo', 'artist-palette', 'kaboodle',
                    'protection-shackle', 'wiki_letter', 'autograph', 'signature',
                    'p_vip', 'ballerina-icon', 'flag_of', 'edit-clear', 'firma_di', 'nuvola'
                ];
                
                if (!excludePatterns.some(pattern => url.includes(pattern))) {
                    images.push({
                        title: page.title.replace(/^File:/, '').replace(/\.[^.]+$/, ''),
                        thumbnail: imageinfo.thumburl,
                        original: imageinfo.url || imageinfo.thumburl
                    });
                }
            }
        }
        
        return images;
    } catch (error) {
        console.error(`Error searching Commons images for "${query}":`, error);
        return [];
    }
}

// Fetch artist page with artwork preference
async function fetchArtistWithArtwork(artistName) {
    // First get the basic page summary
    const pageData = await fetchWikipediaPage(artistName);
    if (!pageData) return null;
    
    // Try to get artwork images
    const artworkImages = await fetchArtworkImages(artistName);
    
    let gallery = artworkImages?.gallery || [];
    
    // If we have fewer than 6 gallery images, supplement with Commons search
    if (gallery.length < 6) {
        console.log(`Only ${gallery.length} gallery images found, searching Commons for more...`);
        const needed = 6 - gallery.length;
        
        // Try different search queries
        const searchQueries = [
            artistName,
            `${artistName} painting`,
            `${artistName} artwork`,
            `${artistName} art`
        ];
        
        for (const query of searchQueries) {
            if (gallery.length >= 6) break;
            
            const commonsImages = await searchCommonsImages(query, needed * 2);
            
            // Filter out duplicates and add to gallery
            const existingUrls = new Set(gallery.map(img => img.thumbnail?.toLowerCase() || img.original?.toLowerCase()));
            for (const img of commonsImages) {
                if (gallery.length >= 6) break;
                
                const imgUrl = img.thumbnail?.toLowerCase() || img.original?.toLowerCase();
                if (imgUrl && !existingUrls.has(imgUrl)) {
                    gallery.push(img);
                    existingUrls.add(imgUrl);
                }
            }
            
            // Small delay to avoid rate limiting
            if (gallery.length < 6 && searchQueries.indexOf(query) < searchQueries.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }
        
        console.log(`Gallery now has ${gallery.length} images after Commons search`);
    }
    
    // Prefer artwork over thumbnail if available, and include gallery
    if (artworkImages || gallery.length > 0) {
        return {
            ...pageData,
            thumbnail: artworkImages?.thumbnail || pageData.thumbnail,
            original: artworkImages?.original || pageData.original,
            gallery: gallery.slice(0, 6) // Limit to 6 total
        };
    }
    
    return {
        ...pageData,
        gallery: []
    };
}

// Fetch a deterministic Wikipedia page based on hash
// Uses Wikipedia categories to ensure the same hash always returns the same subject
async function fetchDeterministicWikipediaPage(hash) {
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
        
        // Fetch articles from the selected category
        // We'll fetch multiple pages and use the hash to select one
        const apiUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=categorymembers&cmtitle=${encodeURIComponent(selectedCategory)}&cmlimit=100&cmnamespace=0&format=json`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch category members');
        }
        
        const data = await response.json();
        const members = data.query?.categorymembers || [];
        
        if (members.length === 0) {
            throw new Error('No category members found');
        }
        
        // Use hash to select a specific article from the category
        const articleIndex = Math.abs(articleHash) % members.length;
        const selectedArticle = members[articleIndex];
        
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
        console.error('Error fetching deterministic Wikipedia page:', error);
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
            console.error('Fallback also failed:', fallbackError);
        }
        return null;
    }
}

// Display gallery of artwork images
function displayGallery(galleryId, galleryImages) {
    const galleryContainer = document.getElementById(galleryId);
    galleryContainer.innerHTML = '';
    
    if (!galleryImages || galleryImages.length === 0) {
        galleryContainer.innerHTML = '<div style="text-align: center; color: #999; padding: 20px; font-size: 0.85rem;">No additional works available</div>';
        return;
    }
    
    console.log(`Displaying gallery with ${galleryImages.length} images`);
    galleryImages.forEach((img, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const imgElement = document.createElement('img');
        console.log(`Gallery image ${index + 1}:`, img.thumbnail);
        imgElement.src = img.thumbnail;
        imgElement.alt = img.title || `Artwork ${index + 1}`;
        imgElement.loading = 'lazy';
        imgElement.onload = () => {
            console.log(`Gallery image ${index + 1} loaded:`, img.thumbnail);
        };
        imgElement.onerror = (e) => {
            console.error(`Gallery image ${index + 1} failed to load:`, img.thumbnail, e);
            galleryItem.style.display = 'none';
        };
        
        // Click to view full size in new tab
        galleryItem.addEventListener('click', () => {
            window.open(img.original, '_blank');
        });
        
        galleryItem.appendChild(imgElement);
        galleryContainer.appendChild(galleryItem);
    });
}

// Format date for display: "Tuesday, December 9, 2025"
function formatDate(date) {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        console.error('Invalid date passed to formatDate:', date);
        return '';
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Display image in wrapper with bio
function displayImage(wrapperId, imageData, titleId, titleText, url, bioId, bioText) {
    const wrapper = document.getElementById(wrapperId);
    const titleElement = document.getElementById(titleId);
    const bioElement = document.getElementById(bioId);
    
    wrapper.innerHTML = '';
    
    if (imageData && (imageData.thumbnail || imageData.original)) {
        const img = document.createElement('img');
        const imageUrl = imageData.thumbnail || imageData.original;
        console.log(`Displaying image for ${titleText}:`, imageUrl);
        img.src = imageUrl;
        img.alt = titleText;
        img.onload = () => {
            console.log(`Image loaded successfully: ${imageUrl}`);
        };
        img.onerror = (e) => {
            console.error(`Image failed to load: ${imageUrl}`, e);
            wrapper.innerHTML = '<div class="error-message">Image unavailable</div>';
        };
        
        // Wrap image in a link if URL is available
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.appendChild(img);
            wrapper.appendChild(link);
        } else {
            wrapper.appendChild(img);
        }
    } else {
        wrapper.innerHTML = '<div class="error-message">No image available</div>';
    }
    
    // Make title a link if URL is available
    if (titleElement) {
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = titleText;
            titleElement.innerHTML = '';
            titleElement.appendChild(link);
        } else {
            titleElement.textContent = titleText;
        }
    }
    
    // Display bio text
    if (bioElement) {
        if (bioText && bioText.trim()) {
            // Truncate bio if too long and add ellipsis
            const maxLength = 300;
            let truncatedBio = bioText.trim();
            if (truncatedBio.length > maxLength) {
                truncatedBio = truncatedBio.substring(0, maxLength).trim();
                // Try to end at a sentence
                const lastPeriod = truncatedBio.lastIndexOf('.');
                if (lastPeriod > maxLength * 0.7) {
                    truncatedBio = truncatedBio.substring(0, lastPeriod + 1);
                } else {
                    truncatedBio += '...';
                }
            }
            bioElement.textContent = truncatedBio;
        } else {
            bioElement.textContent = 'No description available.';
        }
    }
}

// Show loading state
function showLoading() {
    document.getElementById('subjectImageWrapper').innerHTML = '<div class="loading-spinner"></div>';
    document.getElementById('artistImageWrapper').innerHTML = '<div class="loading-spinner"></div>';
    document.getElementById('promptText').textContent = 'Loading...';
    document.getElementById('subjectTitle').textContent = '';
    document.getElementById('artistTitle').textContent = '';
    document.getElementById('subjectBio').textContent = '';
    document.getElementById('artistBio').textContent = '';
    document.getElementById('worksGallery').innerHTML = '<div class="loading-spinner"></div>';
}

// Parse date from URL parameter (dd-mm-yyyy format)
function parseDateFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const dateParam = urlParams.get('date');
    
    if (!dateParam) {
        return null; // No date parameter
    }
    
    // Parse dd-mm-yyyy format
    const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
    const match = dateParam.match(datePattern);
    
    if (!match) {
        return { error: 'invalid_format' };
    }
    
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);
    
    // Validate date
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return { error: 'invalid_date' };
    }
    
    // Create date object at noon local time to avoid timezone shift issues
    // This ensures the date won't shift when converted to ISO string
    const date = new Date(year, month - 1, day, 12, 0, 0, 0);
    
    // Check if date is valid (handles invalid dates like Feb 30)
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        return { error: 'invalid_date' };
    }
    
    return date;
}

// Show alert overlay
function showAlert(message) {
    const alertOverlay = document.getElementById('alertOverlay');
    const alertMessage = alertOverlay.querySelector('.alert-message');
    alertMessage.textContent = message;
    alertOverlay.style.display = 'block';
    
    // Hide after 3 seconds
    setTimeout(() => {
        alertOverlay.style.display = 'none';
    }, 3000);
}

// Get date for prompt (from URL parameter or current date)
function getPromptDate() {
    const urlDate = parseDateFromURL();
    
    if (urlDate && !urlDate.error) {
        // Valid date from URL
        return urlDate;
    } else if (urlDate && urlDate.error) {
        // Invalid date parameter
        showAlert('Invalid date parameter. Showing today\'s date.');
        return new Date();
    } else {
        // No date parameter, use today
        return new Date();
    }
}

// API base URL - set to empty string to disable server-side caching, or use your server URL
// To use server-side caching: set to 'http://localhost:3000' or your production server URL
// To use client-side only: set to '' (empty string) or null
const API_BASE_URL = ''; // Empty = client-side only, 'http://localhost:3000' = use server

// Generate and display today's prompt (or date from URL parameter if provided)
async function generateDailyPrompt() {
    const promptDate = getPromptDate(); // Gets date from URL parameter if valid, otherwise today's date
    
    // Normalize date string to YYYY-MM-DD using local date components to avoid timezone issues
    const year = promptDate.getFullYear();
    const month = String(promptDate.getMonth() + 1).padStart(2, '0');
    const day = String(promptDate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    const dateHash = hashDate(promptDate);
    
    // Debug logging
    const urlDate = parseDateFromURL();
    console.log('URL parameter:', window.location.search);
    console.log('Parsed URL date:', urlDate);
    console.log('Final prompt date:', promptDate);
    console.log('Date string:', dateString);
    console.log('Date hash:', dateHash);
    
    // Update date display first (before loading state) - shows URL parameter date if valid
    const dateElement = document.getElementById('dateDisplay');
    if (dateElement) {
        dateElement.textContent = formatDate(promptDate);
    }
    
    showLoading();
    
    // Try server-side API first if configured
    if (API_BASE_URL) {
        console.log('Server-side API available');
        try {
            // Add timeout to prevent hanging
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
            
            const response = await fetch(`${API_BASE_URL}/api/prompt/${dateString}`, {
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (response.ok) {
                const data = await response.json();
                
                // Update prompt text
                const promptText = document.getElementById('promptText');
                if (data.prompt) {
                    promptText.textContent = data.prompt;
                } else {
                    promptText.textContent = `${data.subject?.title || '[Subject]'} in the style of ${data.artist?.name || '[Artist]'}`;
                }
                
                // Display images with bios
                if (data.subject) {
                    displayImage('subjectImageWrapper', data.subject, 'subjectTitle', data.subject.title, data.subject.url, 'subjectBio', data.subject.extract);
                } else {
                    document.getElementById('subjectImageWrapper').innerHTML = '<div class="error-message">Failed to load subject</div>';
                    document.getElementById('subjectTitle').textContent = 'Unknown';
                    document.getElementById('subjectBio').textContent = 'Unable to load description.';
                }
                
                if (data.artist) {
                    displayImage('artistImageWrapper', data.artist, 'artistTitle', data.artist.title || data.artist.name, data.artist.url, 'artistBio', data.artist.extract);
                } else {
                    document.getElementById('artistImageWrapper').innerHTML = '<div class="error-message">Failed to load artist</div>';
                    document.getElementById('artistTitle').textContent = data.artist?.name || 'Unknown';
                    document.getElementById('artistBio').textContent = 'Unable to load description.';
                }
                
                // Display gallery
                const galleryImages = data.artist && data.artist.gallery ? data.artist.gallery.slice(0, 6) : [];
                displayGallery('worksGallery', galleryImages);
                
                return; // Success - exit early
            } else {
                // Response not OK - throw to trigger fallback
                throw new Error(`Server API returned ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.warn('Server API unavailable, falling back to client-side:', error);
            // Fall through to client-side code
        }
    }
    
    // Client-side fallback (original implementation)
    try {
        console.log('Client-side fallback');
        // Verify artists array is valid
        if (!artists || artists.length === 0) {
            console.error('Artists array is empty or invalid!');
            return;
        }
        
        // Select artist based on hash - use a different seed for artist vs subject
        const artistHash = dateHash * 31 + 17; // Different multiplier for artist selection
        const artistIndex = artistHash % artists.length;
        const artistName = artists[artistIndex];
        
        console.log('Date:', dateString, 'Hash:', dateHash, 'Artist Index:', artistIndex, 'Artist:', artistName, 'Total Artists:', artists.length, 'Date from URL:', parseDateFromURL() ? 'Yes' : 'No');
        
        // Fetch artist page from Art Institute of Chicago with artwork preference
        const artistData = await fetchArtistWithArtwork(artistName);
        
        // Fetch deterministic subject page from Wikipedia based on date hash
        const subjectData = await fetchDeterministicWikipediaPage(dateHash);
        
        // Update prompt text
        const promptText = document.getElementById('promptText');
        if (subjectData && artistData) {
            promptText.textContent = `${subjectData.title} in the style of ${artistData.title}`;
        } else if (subjectData) {
            promptText.textContent = `${subjectData.title} in the style of ${artistName}`;
        } else if (artistData) {
            promptText.textContent = `[Subject] in the style of ${artistData.title}`;
        } else {
            promptText.textContent = `${artistName} style`;
        }
        
        // Display images with bios
        if (subjectData) {
            displayImage('subjectImageWrapper', subjectData, 'subjectTitle', subjectData.title, subjectData.url, 'subjectBio', subjectData.extract);
        } else {
            document.getElementById('subjectImageWrapper').innerHTML = '<div class="error-message">Failed to load subject</div>';
            document.getElementById('subjectTitle').textContent = 'Unknown';
            document.getElementById('subjectBio').textContent = 'Unable to load description.';
        }
        
        if (artistData) {
            displayImage('artistImageWrapper', artistData, 'artistTitle', artistData.title, artistData.url, 'artistBio', artistData.extract);
        } else {
            document.getElementById('artistImageWrapper').innerHTML = '<div class="error-message">Failed to load artist</div>';
            document.getElementById('artistTitle').textContent = artistName;
            document.getElementById('artistBio').textContent = 'Unable to load description.';
        }
        
        // Only use artist gallery images (no subject images in gallery)
        const galleryImages = artistData && artistData.gallery ? artistData.gallery.slice(0, 6) : [];
        displayGallery('worksGallery', galleryImages);
        
    } catch (error) {
        console.error('Error generating prompt:', error);
        document.getElementById('promptText').textContent = 'Error loading prompt. Please try again.';
        document.getElementById('subjectImageWrapper').innerHTML = '<div class="error-message">Error loading</div>';
        document.getElementById('artistImageWrapper').innerHTML = '<div class="error-message">Error loading</div>';
    }
}

// Update the display
async function updateDisplay() {
    await generateDailyPrompt();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial date immediately - respects URL parameter if provided
    const promptDate = getPromptDate(); // Gets date from URL parameter if valid, otherwise today's date
    const dateElement = document.getElementById('dateDisplay');
    if (dateElement) {
        dateElement.textContent = formatDate(promptDate);
    }
    
    updateDisplay();
    
});

// Update automatically at midnight
function checkForNewDay() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        updateDisplay();
        // Check again after 24 hours
        setInterval(updateDisplay, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
}

checkForNewDay();