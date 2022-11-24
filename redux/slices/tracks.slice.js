import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {trackData} from "../../data/music-data/track.data";

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: trackData,
}

const tracksSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        addLike: (state, action) => {
            const song = state.data.find(song => song.id === action.payload.id)
            if (song)
                song.favorite = true;
        },
        removeLike: (state, action) => {
            const song = state.data.find(song => song.id === action.payload.id)
            if (song)
                song.favorite = false;
        },
    },
})

export const {
    addLike,
    removeLike,
} = tracksSlice.actions;

export default tracksSlice.reducer;
