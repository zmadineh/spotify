import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import playlistsSlice from "./slices/playlists.slice";
import tracksSlice from "./slices/tracks.slice";
// import {cryptoApi} from "./features/api/cryptoApi";


// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";

// const persistConfig = {
//     key: "root",
//     storage,
// };

// const rootReducer = combineReducers({
//     bitcoin: bitcoinSlice,
//     news: newsSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        playlists: playlistsSlice,
        tracks: tracksSlice,
        // [cryptoApi.reducerPath] : cryptoApi.reducer
    },
    // reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //cryptoApi.middleware),

});

// export const persistor = persistStore(store);
export default store;

