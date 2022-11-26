import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {trackData} from "../../data/music-data/track.data";
import {playlistsData} from "../../data/music-data/playlists.data";

// const prevHandler = (data) => {
//     const prevPlayingTrackId = data.playing.playingTrackId;
//     const prevPlayingPlaylistId = data.playing.playingPlaylistId;
//     const prevTrack = data.track.find(track => track.id === prevPlayingTrackId)
//     const prevPlaylist = data.playlist.find(playlist => playlist.id === prevPlayingPlaylistId)
//     if (prevTrack) {
//         prevTrack.playing = false;
//         prevTrack.pause = false;
//     }
//     if (prevPlaylist) {
//         prevPlaylist.playing = false;
//         prevPlaylist.pause = false;
//     }
//     return data;
// }

const playingData = {
    playlist: 1, // playlist id
    track: 1, // track id
}

const recentlyPlayed = [
    {type: 'track', id: 1},
]


const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: {
        track: trackData,
        playlist: playlistsData,
        recentlyPlayed: recentlyPlayed,
        playing: playingData
    }
}

const musicsSlice = createSlice({
    name: 'musics',
    initialState,
    reducers: {
        handleLike: (state, action) => {
            if(action.payload.type === 'playlist'){
                const playlist = state.data.playlist.find(playlist => playlist.id === action.payload.id)
                if (playlist) playlist.favorite = !playlist.favorite;
            }
            else {
                const track = state.data.track.find(track => track.id === action.payload.id)
                if (track) track.favorite = !track.favorite;
            }
        },
        handlePlay: (state, action) => {
            const type = action.payload.type;
            const payload = action.payload;
            const newData = state.data[type].find(item => item.id === payload.id)

            if (newData.id === state.data.playing[type]) {
                if (type === 'playlist') {
                    const newTracks = state.data.track.filter(track => track.playlist_id === newData.id)
                    if (newTracks.length > 0) {
                        const firstTrack = newTracks[0]
                        firstTrack.playing = !firstTrack.playing;
                        firstTrack.pause = !firstTrack.pause;
                        newData.playing = !newData.playing;
                        newData.pause = !newData.pause;
                    }
                }
                else if (type === 'track') {
                    console.log('current track received')
                    const newPlaylist = state.data.playlist.find(playlist => playlist.id === newData.playlist_id)
                    if(newPlaylist) {
                        newPlaylist.playing = !newPlaylist.playing;
                        newPlaylist.pause = !newPlaylist.pause;
                    }
                    newData.playing = !newData.playing;
                    newData.pause = !newData.pause;
                }
            }

            else if (newData) {
                const prevPlayingTrackId = state.data.playing['track'];
                const prevPlayingPlaylistId = state.data.playing['playlist'];
                const prevTrack = state.data.track.find(track => track.id === prevPlayingTrackId)
                const prevPlaylist = state.data.playlist.find(playlist => playlist.id === prevPlayingPlaylistId)
                if (prevTrack) {
                    prevTrack.playing = false;
                    prevTrack.pause = false;
                }
                if (prevPlaylist) {
                    prevPlaylist.playing = false;
                    prevPlaylist.pause = false;
                }

                if (type === 'playlist') {
                    const newTracks = state.data.track.filter(track => track.playlist_id === newData.id)
                    if (newTracks.length > 0) {
                        const firstTrack = newTracks[0]
                        firstTrack.playing = true;
                        firstTrack.pause = false;
                        newData.playing = true;
                        newData.pause = false;

                        const currPlaying = state.data.playing;
                        currPlaying.playlist = newData.id;
                        currPlaying.track= firstTrack.id;
                    }
                }
                else if (type === 'track'){
                    const newPlaylist = state.data.playlist.find(playlist => playlist.id === newData.playlist_id)
                    if(newPlaylist) {
                        newPlaylist.playing = true;
                        newPlaylist.pause = false;
                        newData.playing = true;
                        newData.pause = false;

                        const currPlaying = state.data.playing;
                        currPlaying.playlist = newPlaylist.id;
                        currPlaying.track= newData.id;
                    }
                }
            }
        },

        addRecent: (state, action) => {
            const recentData = {type: action.payload.type, id: action.payload.id}
            const repeatedDataIndex = state.data.recentlyPlayed.findIndex(item => item === recentData)
            if (repeatedDataIndex !== -1){
                state.data.recentlyPlayed.splice(repeatedDataIndex, 1)
            }
            state.data.recentlyPlayed.push(recentData)
        }
    },
})

export const {
    handleLike,
    handlePlay,
    addRecent,
} = musicsSlice.actions;

export default musicsSlice.reducer;
