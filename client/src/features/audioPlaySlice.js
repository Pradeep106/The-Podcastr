import { createSlice } from "@reduxjs/toolkit";
// import { startTransition } from "react";

const audioPlaySlice = createSlice({
    name: "audioPlay",
    initialState:{
        currentSong:null,
        isPlaying:false,
    },
    reducers:{
        playSong:(state,action)=>{
            state.currentSong  = action.payload;
            state.isPlaying = true;
        },
        pauseSong:(state)=>{
            state.isPlaying =false
        }
    }    
        
});

export const {playSong,pauseSong} = audioPlaySlice.action;
export default audioPlaySlice.reducer;