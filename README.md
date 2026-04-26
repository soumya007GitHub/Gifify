# Gifify

**Live app:** [https://gifify-redux.netlify.app/](https://gifify-redux.netlify.app/)

Gifify is a React app that lets you search media from multiple providers in one UI:

- Photos from Unsplash
- Videos from Pexels
- GIFs from GIPHY

The app uses Redux Toolkit for shared search state, Axios for API calls, React Router for navigation, Vite for bundling and the dev server, and Tailwind CSS for styling. Saved items are stored in `localStorage` and viewed on a separate collection page.

## Purpose

The goal of this project is to provide a single searchable media browser with simple tabs for content type switching:

- Enter a search query
- Choose a tab (`Photos`, `Videos`, or `GIFs`)
- View results in a card grid
- Open the original media in a new tab
- Save items to a personal collection (`Save` on a card) and open them from **Saved** (`/saved`)

## Tech Stack

- React 19
- Vite 8
- Redux Toolkit + React Redux
- React Router 7
- Axios
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Lucide React (icons)
- ESLint

## Project Structure

```text
gifify/
  src/
    api/
      getData.js               # API request helpers (Unsplash, Pexels, GIPHY)
    components/
      NavBar.jsx               # App navigation (home / saved)
      SearchBar.jsx            # Query input + submit
      Tabs.jsx                 # Media type tab switcher
      ResultGrid.jsx           # Data fetching + result rendering
      Card.jsx                 # Single media card + Save to collection
    pages/
      HomePage.jsx             # Search UI (NavBar, SearchBar, Tabs, ResultGrid)
      CollectionPage.jsx       # Saved items from localStorage
    redux/
      store.js                 # Redux store
      features/
        searchSlice.js         # Query/tab/result/loading/error state
        collectionSlice.js     # Unused/legacy slice (collection uses localStorage)
    App.jsx                    # Routes: `/`, `/saved`
    main.jsx                   # Root: Provider, BrowserRouter
    index.css
  public/
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

### 4) Routing and saved collection

- `/` renders `HomePage` (search experience).
- `/saved` renders `CollectionPage`, which reads the `collection` key from `localStorage` (written when the user clicks **Save** on a `Card`).

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
- Click **Save** on a card to add it to your collection; open **Saved** in the nav (or go to `/saved`) to view or remove items.

## Known Gaps / Improvement Ideas

- `collectionSlice.js` is not wired into the store; persistence is via `localStorage` only.
- Error handling in `ResultGrid` can be improved for clearer user messages.
- Some media fields (like video file choice) can be selected more robustly.
- Add pagination and tests for API/state flow.

## Scripts

Defined in `package.json`:

- `npm run dev` - Start Vite dev server
- `npm run build` - Create production bundle
- `npm run preview` - Preview built app
- `npm run lint` - Run ESLint
