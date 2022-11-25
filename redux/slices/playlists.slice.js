import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {playlistsData} from "../../data/music-data/playlists.data";

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: playlistsData,
}

const playlistsSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers: {
        handleLike: (state, action) => {
            const track = state.data.find(track => track.id === action.payload.id)
            if (track) track.favorite = !track.favorite;
        },
        handlePlay: (state, action) => {
            const track = state.data.find(track => track.id === action.payload.id)
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
            state.data.map(track => {
                if (track.id !== action.payload.id) {
                    track.playing = false;
                    track.pause = false;
                }
            });
        },
    },
})

export const {
    handleLike,
    handlePlay,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;
