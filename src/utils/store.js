import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
    reducer:{
        app:Appslice,
        search:searchSlice,
        chat:ChatSlice,
    }
});
export default store;