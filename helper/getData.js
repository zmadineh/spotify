import {songCategories} from "../data/songs/song-categories.data";
import {playlistsData} from "../data/songs/playlists.data";
import {songData} from "../data/songs/song.data";

export const getCategories = () => {
    return songCategories;
}

export const getCategoryById = (category_id) => {
    return songCategories.find(item => item.id === category_id)
}



export const getPlaylistById = (playlist_id) => {
    return playlistsData.find(item => item.id === playlist_id)
}

export const getPlaylistsByCategory = (category_id) => {
    return playlistsData.filter(playlist => playlist.category_id === category_id);
}



export const getSongById = (song_id) => {
    return songData.find(song => song.id === song_id)
}

export const getSongByPlaylist = (playlist_id) => {
    return songData.filter(song => song.playlist_id === playlist_id);
}

export const getSongsByCategory = (category_id) => {
    return playlistsData.filter(song => song.category_id === category_id);
}