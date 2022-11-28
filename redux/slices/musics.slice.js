import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {trackData} from "../../data/music-data/track.data";
import {playlistsData} from "../../data/music-data/playlists.data";

const playingData = {
    playlist: 1, // playlist id
    track: 1, // track id
}

const recentlyPlayed = [
    trackData[0],
    // {type: 'track', id: 1},
]

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: {
        track: trackData,
        playlist: playlistsData,
        recentlyPlayed: recentlyPlayed,
        playing: playingData,
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
        pauseTrack: (state, action) =>  {
            console.log('pause track id : ', action.payload.id)
            const currentTrack = state.data.track.find(track => track.id === action.payload.id)
            const currentPlaylist = state.data.playlist.find(playlist => playlist.id === currentTrack.playlist_id)
            if (currentTrack) {
                currentTrack.playing = false;
                currentTrack.pause = true;
            }
            if (currentPlaylist) {
                currentPlaylist.playing = false;
                currentPlaylist.pause = true;
            }
        },
        playTrack: (state, action) =>  {
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

            const currPlaying = state.data.playing;
            const currentTrack = state.data.track.find(track => track.id === action.payload.id)
            console.log('current track id : ', currentTrack.id)

            if (currentTrack) {
                currentTrack.playing = true;
                currentTrack.pause = false;
                currPlaying.track = currentTrack.id;

                const currentPlaylist = state.data.playlist.find(playlist => playlist.id === currentTrack.playlist_id)
                if (currentPlaylist) {
                    currentPlaylist.playing = true;
                    currentPlaylist.pause = false;

                    currPlaying.playlist = currentPlaylist.id;
                }
                else {
                    currPlaying.playlist = 0;
                }
            }
            else {
                currPlaying.playlist = 0;
                currPlaying.track = 0;
            }
        },

        pausePlaylist: (state, action) =>  {
            const currentPlaylist = state.data.playlist.find(playlist => playlist.id === action.payload.id)
            const currentTrack = state.data.track.find(track => (track.playlist_id === currentPlaylist.id && track.playing))
            if (currentTrack) {
                currentTrack.playing = false;
                currentTrack.pause = true;
            }
            if (currentPlaylist) {
                currentPlaylist.playing = false;
                currentPlaylist.pause = true;
            }
        },

        playPlaylist: (state, action) =>  {
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

            const currPlaying = state.data.playing;
            const currentPlaylist = state.data.playlist.find(playlist => playlist.id === action.payload.id)

            if (currentPlaylist) {

                const playlistTracks = state.data.track.filter(track => (track.playlist_id === currentPlaylist.id))

                if (playlistTracks.length > 0) {
                    const firstTrack = playlistTracks[0]
                    firstTrack.playing = true;
                    firstTrack.pause = false;

                    currentPlaylist.playing = true;
                    currentPlaylist.pause = false;

                    currPlaying.track = firstTrack.id;
                    currPlaying.playlist = currentPlaylist.id;
                }
                else {
                    currPlaying.playlist = 0;
                    currPlaying.track = 0;
                }
            }
            else {
                currPlaying.track = 0;
                currPlaying.playlist = 0;
            }
        },

        handlePlay: (state, action) => {
            // toggle play track or playlist
            // const type = action.payload.type;
            // const payload = action.payload;
            // const newData = state.data[type].find(item => item.id === payload.id)
            //
            // if (newData.id === state.data.playing[type]) {
            //     if (type === 'playlist') {
            //         const newTracks = state.data.track.filter(track => track.playlist_id === newData.id)
            //         if (newTracks.length > 0) {
            //             const firstTrack = newTracks[0]
            //             firstTrack.playing = !firstTrack.playing;
            //             firstTrack.pause = !firstTrack.pause;
            //             newData.playing = !newData.playing;
            //             newData.pause = !newData.pause;
            //
            //             const repeatedDataIndex = state.data.recentlyPlayed.findIndex(item => item.id === firstTrack.id && item.type === firstTrack.type)
            //             if (repeatedDataIndex !== -1){
            //                 state.data.recentlyPlayed.splice(repeatedDataIndex, 1)
            //             }
            //             state.data.recentlyPlayed.unshift(firstTrack)
            //         }
            //     }
            //     else if (type === 'track') {
            //         console.log('current track received')
            //         const newPlaylist = state.data.playlist.find(playlist => playlist.id === newData.playlist_id)
            //         if(newPlaylist) {
            //             newPlaylist.playing = !newPlaylist.playing;
            //             newPlaylist.pause = !newPlaylist.pause;
            //         }
            //         newData.playing = !newData.playing;
            //         newData.pause = !newData.pause;
            //
            //         const repeatedDataIndex = state.data.recentlyPlayed.findIndex(item => item.id === newData.id && item.type === newData.type)
            //         if (repeatedDataIndex !== -1){
            //             state.data.recentlyPlayed.splice(repeatedDataIndex, 1)
            //         }
            //         state.data.recentlyPlayed.unshift(newData)
            //     }
            // }
            //
            // else if (newData) {
            //     const prevPlayingTrackId = state.data.playing['track'];
            //     const prevPlayingPlaylistId = state.data.playing['playlist'];
            //     const prevTrack = state.data.track.find(track => track.id === prevPlayingTrackId)
            //     const prevPlaylist = state.data.playlist.find(playlist => playlist.id === prevPlayingPlaylistId)
            //     if (prevTrack) {
            //         prevTrack.playing = false;
            //         prevTrack.pause = false;
            //     }
            //     if (prevPlaylist) {
            //         prevPlaylist.playing = false;
            //         prevPlaylist.pause = false;
            //     }
            //
            //     if (type === 'playlist') {
            //         const newTracks = state.data.track.filter(track => track.playlist_id === newData.id)
            //         if (newTracks.length > 0) {
            //             const firstTrack = newTracks[0]
            //             firstTrack.playing = true;
            //             firstTrack.pause = false;
            //             newData.playing = true;
            //             newData.pause = false;
            //
            //             const currPlaying = state.data.playing;
            //             currPlaying.playlist = newData.id;
            //             currPlaying.track= firstTrack.id;
            //
            //             const repeatedDataIndex = state.data.recentlyPlayed.findIndex(item => item.id === firstTrack.id && item.type === firstTrack.type)
            //             if (repeatedDataIndex !== -1){
            //                 state.data.recentlyPlayed.splice(repeatedDataIndex, 1)
            //             }
            //             state.data.recentlyPlayed.unshift(firstTrack)
            //         }
            //     }
            //     else if (type === 'track'){
            //         const newPlaylist = state.data.playlist.find(playlist => playlist.id === newData.playlist_id)
            //         const currPlaying = state.data.playing;
            //         if(newPlaylist) {
            //             newPlaylist.playing = true;
            //             newPlaylist.pause = false;
            //             newData.playing = true;
            //             newData.pause = false;
            //
            //             currPlaying.playlist = newPlaylist.id;
            //             currPlaying.track= newData.id;
            //         }
            //         else {
            //             newData.playing = true;
            //             newData.pause = false;
            //
            //             currPlaying.playlist = 0;
            //             currPlaying.track= newData.id;
            //         }
            //
            //         const repeatedDataIndex = state.data.recentlyPlayed.findIndex(item => item.id === newData.id && item.type === newData.type)
            //         if (repeatedDataIndex !== -1){
            //             state.data.recentlyPlayed.splice(repeatedDataIndex, 1)
            //         }
            //         state.data.recentlyPlayed.unshift(newData)
            //     }
            // }
        },

        addRecent: (state, action) => {
            const recentData = action.payload
            if (recentData.type === 'track')
            {
                const repeatedDataIndex = state.data.recentlyPlayed.findIndex(item => item.id === recentData.id && item.type === recentData.type)
                console.log('add recent dispatch: ', repeatedDataIndex, state.data.recentlyPlayed)
                if (repeatedDataIndex !== -1){
                    state.data.recentlyPlayed.splice(repeatedDataIndex, 1)
                }
                state.data.recentlyPlayed.unshift(recentData)
            }
        }
    },
})

export const {
    handleLike,
    handlePlay,
    pauseTrack,
    pausePlaylist,
    playPlaylist,
    playTrack,
    addRecent,
} = musicsSlice.actions;

export default musicsSlice.reducer;
