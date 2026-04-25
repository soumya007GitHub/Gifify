# Gifify

Gifify is a React app that lets you search media from multiple providers in one UI:
- Photos from Unsplash
- Videos from Pexels
- GIFs from GIPHY

The app uses Redux Toolkit for shared state, Axios for API calls, Vite for bundling/dev server, and Tailwind CSS for styling.

## Purpose

The goal of this project is to provide a single searchable media browser with simple tabs for content type switching:
- Enter a search query
- Choose a tab (`Photos`, `Videos`, or `GIFs`)
- View results in a card grid
- Open the original media in a new tab

## Tech Stack

- React 19
- Vite 8
- Redux Toolkit + React Redux
- Axios
- Tailwind CSS 4 (`@tailwindcss/vite`)
- ESLint

## Project Structure

```text
gifify/
  src/
    api/
      getData.js               # API request helpers (Unsplash, Pexels, GIPHY)
    components/
      SearchBar.jsx            # Query input + submit
      Tabs.jsx                 # Media type tab switcher
      ResultGrid.jsx           # Data fetching + result rendering
      Card.jsx                 # Single media card
    redux/
      store.js                 # Redux store
      features/
        searchSlice.js         # Query/tab/result/loading/error state
        collectionSlice.js     # Unused/legacy slice
    App.jsx
    main.jsx
    index.css
  .env
  package.json
  vite.config.js
```

## How It Works

### 1) Search flow

1. `SearchBar` keeps local input state.
2. On submit, it dispatches `setQuery(query)` to Redux.
3. `ResultGrid` watches `query` + `activeTab` with `useEffect`.
4. Based on the active tab, it calls:
   - `getPhotos()`
   - `getVideos()`
   - `getGifs()`
5. Results are normalized into a shared object shape and rendered using `Card`.

### 2) Shared result schema

Each provider response is mapped into:

```js
{
  id: string | number,
  type: "Image" | "Video" | "GIF",
  thumbnail: string,
  src: string,
  title: string
}
```

This keeps UI components provider-agnostic.

### 3) Redux state

`searchSlice` stores:
- `query`: current search term
- `activeTab`: currently selected tab
- `result`: normalized media array
- `loading`: request in-flight state
- `error`: request error message/object

## Environment Variables

Create a `.env` file in project root with these variables:

```bash
VITE_PEXELS_URL=https://api.pexels.com/v1/videos/search
VITE_PEXELS_API_KEY=your_pexels_api_key
VITE_UNSPLASH_URL=https://api.unsplash.com/search/photos
VITE_UNSPLASH_CLIENT_ID=your_unsplash_client_id
VITE_GIPHY_URL=https://api.giphy.com/v1/gifs/search
VITE_GIPHY_API_KEY=your_giphy_api_key
```

Notes:
- Vite only exposes env vars prefixed with `VITE_` to browser code.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended latest LTS)
- npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Usage Guide

- Type a search keyword (example: `nature`) and click `Search`.
- Switch between `Photos`, `Videos`, and `GIFs`.
- Click any result card to open the source media URL in a new tab.

## Known Gaps / Improvement Ideas

- `collectionSlice.js` is currently not wired into the store.
- Error handling in `ResultGrid` can be improved for better user messages.
- Some media fields (like video file choice) can be selected more robustly.
- Add pagination and tests for API/state flow.

## Scripts

Defined in `package.json`:
- `npm run dev` - Start Vite dev server
- `npm run build` - Create production bundle
- `npm run preview` - Preview built app
- `npm run lint` - Run ESLint
