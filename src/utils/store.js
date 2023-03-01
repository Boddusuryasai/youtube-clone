import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";
import videosSlice from "./VideoSlice";

const store = configureStore({
    reducer:{
        app:Appslice,
        search:searchSlice,
        chat:ChatSlice,
        videos:videosSlice
    }
});
export default store;