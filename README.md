# Daily Art Generator

A web application that generates daily art inspiration prompts by combining a drawing subject with an artist's style.

## Features

- **Daily Prompts**: Each date generates a unique combination of subject and artist
- **Server-Side Caching**: API responses are cached so each date only queries Wikipedia/Wikidata once
- **365 Artists**: One unique artist for each day of the year
- **Deterministic Selection**: Same date always returns the same artist/subject combination

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

### 3. Update Client API URL

If your frontend and backend are on different domains, update the `API_BASE_URL` in `script.js`:

```javascript
const API_BASE_URL = 'http://localhost:3000'; // Change to your server URL
```

### 4. Open the Website

Open `index.html` in your browser (or serve it through your web server).

## Deployment

### Option 1: Same Server (Recommended)

Serve both the static files and the API from the same server. Update `server.js` to serve static files:

```javascript
app.use(express.static(__dirname));
```

Then update `API_BASE_URL` in `script.js` to use a relative path:

```javascript
const API_BASE_URL = ''; // Empty for same origin
```

### Option 2: Separate Servers

- Deploy the backend API to a server (e.g., Heroku, Railway, Render)
- Update `API_BASE_URL` in `script.js` to point to your API server
- Deploy the frontend files to your hosting provider

## How It Works

1. **Client Request**: Frontend requests `/api/prompt/YYYY-MM-DD`
2. **Cache Check**: Server checks if data exists in cache for that date
3. **Cache Hit**: Returns cached data immediately
4. **Cache Miss**: 
   - Fetches artist from Wikipedia
   - Fetches artist artworks from Wikidata/MediaWiki
   - Fetches subject from Wikipedia categories
   - Saves to cache
   - Returns data to client

## Cache Location

Cached data is stored in the `cache/` directory as JSON files named by date (e.g., `2024-12-10.json`).

## Environment Variables

- `PORT`: Server port (default: 3000)

## Development

For development with auto-reload:

```bash
npm run dev
```

## License

MIT


