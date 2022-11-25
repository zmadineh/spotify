import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {trackData} from "../../data/music-data/track.data";
import {playlistsData} from "../../data/music-data/playlists.data";

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: {track: trackData, playlist: playlistsData}
}

const musicsSlice = createSlice({
    name: 'musics',
    initialState,
    reducers: {
        handleLike: (state, action) => {
            if(action.payload.type === 'playlist'){

            }
            else {
                const track = state.data.track.find(track => track.id === action.payload.id)
                if (track) track.favorite = !track.favorite;
            }
        },
        handlePlay: (state, action) => {
            if(action.payload.type === 'playlist'){

            }
            else {
                const track = state.data.track.find(track => track.id === action.payload.id)
                if (track) {
                    if (track.playing) {
                        track.playing = false;
                        track.pause = true;
                    }
                    else if (track.pause) {
                        track.playing = true;
                        track.pause = false;
                    }
                    else track.playing = true;
                }
                console.log('pause ',track.pause, 'play ', track.playing)
                state.data.track.map(track => {
                    if (track.id !== action.payload.id) {
                        track.playing = false;
                        track.pause = false;
                    }
                });
            }
        },
    },
})

export const {
    handleLike,
    handlePlay,
} = musicsSlice.actions;

export default musicsSlice.reducer;
