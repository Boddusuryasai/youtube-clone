import { createSlice } from "@reduxjs/toolkit";
import { CHAT_OFFSET } from "./constants";
const ChatSlice = createSlice({
    name:"Chat",
    initialState:{
       messages:[]
    },
    reducers:{
        addMessage: (state, action) => {
            state.messages.splice(CHAT_OFFSET,1)
            state.messages.unshift(action.payload)
          }
          
    }
})
export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;