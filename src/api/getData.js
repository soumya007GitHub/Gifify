import axios from "axios";

export const getPhotos = async (query = triumph, page = 1, per_page = 15) => {
    const response = await axios.get(
        import.meta.env.VITE_UNSPLASH_URL, {
        params: {
            query: query,
            page: page,
            per_page: per_page
        },
        headers: {
            'Authorization': `Client-ID ${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`
        }
    }
    )
    return response.data.results.map((result) => ({
        id: result.id,
        type: 'Image',
        thumbnail: result.links.download,
        src: result.links.download,
        title: result.alt_description
    }));
}

export const getVideos = async (query, page = 1, per_page = 10) => {
    const response = await axios.get(
        import.meta.env.VITE_PEXELS_URL, {
        params: {
            query: query,
            page: page,
            per_page: per_page
        },
        headers: {
            'Authorization': import.meta.env.VITE_PEXELS_API_KEY
        }
    }
    );

    return response.data.videos.map((result) => ({
        id: result.id,
        type: 'Video',
        thumbnail: result.image,
        src: result.video_files[0].link,
        title: query
    }));
}

export const getGifs = async (query, limit = 50) => {
    const response = await axios.get(
        import.meta.env.VITE_GIPHY_URL, {
        params: {
            q: query,
            limit: limit,
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        }
    }
    )
    return response.data.data.map((result) => ({
        id: result.id,
        type: 'GIF',
        thumbnail: result.embed_url,
        src: result.images.original.url,
        title: result.title
    }));
}