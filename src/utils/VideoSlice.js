import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_URL,YOUTUBE_SEARCH_URL } from "./constants";
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
    const response = await fetch(YOUTUBE_URL);
    const data = await response.json();
    return data.items;
  });
  
  export const fetchAdditionalVideos = createAsyncThunk("videos/fetchAdditionalVideos", async (query) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=AIzaSyCHKm-v2cxZCepXqjKALGos8hd83N03If8`)
    const data = await response.json();
    return data.items;
  });
  
  const videosSlice = createSlice({
    name: "videos",
    initialState: {
      videos: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchVideos.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
          state.loading = false;
          state.videos = action.payload;
        })
        .addCase(fetchVideos.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchAdditionalVideos.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchAdditionalVideos.fulfilled, (state, action) => {
          state.loading = false;
          
          state.videos = [ ...action.payload];
          
        })
        .addCase(fetchAdditionalVideos.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default videosSlice.reducer;
  