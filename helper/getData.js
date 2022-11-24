import {songCategories} from "../data/music-data/song-categories.data";

export const getCategories = () => {
    return songCategories;
}

export const getCategoryById = (category_id) => {
    return songCategories.find(item => item.id === category_id)
}



export const getPlaylistById = (playlists, playlist_id) => {
    return playlists.find(item => item.id === playlist_id)
}

export const getPlaylistsByCategory = (playlists, category_id) => {
    return playlists.filter(playlist => playlist.category_id === category_id);
}



export const getTracksById = (tracks, track_id) => {
    return tracks.find(track => track.id === track_id)
}

export const getTracksByPlaylist = (tracks, playlist_id) => {
    return tracks.filter(track => track.playlist_id === playlist_id);
}

export const getTracksByCategory = (tracks, category_id) => {
    return tracks.filter(track => track.category_id === category_id);
}