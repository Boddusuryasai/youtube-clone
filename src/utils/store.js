import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app:Appslice,
        search:searchSlice
    }
});
export default store;