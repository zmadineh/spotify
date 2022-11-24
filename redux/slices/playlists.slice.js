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
        // add: (state, action) => {
        //     const track = state.data.find(track => track.id === action.payload.id)
        //     if (track)
        //         track.favorite = true;
        // },
    },
})

// export const {
//     addMark,
//     removeMark,
// } = playlistsSlice.actions;

export default playlistsSlice.reducer;
