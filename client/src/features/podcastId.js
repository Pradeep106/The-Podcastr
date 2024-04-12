const { createSlice } = require("@reduxjs/toolkit");

const podcastIdSlice = createSlice({
    name:'podcastId',
    initialState:{
        id:"",
    },
    reducers:{
        savePodcastId:(state,action)=>{
            state.id =action.payload;
        }
    }
})

export const {savePodcastId} =podcastIdSlice.actions;
export default podcastIdSlice.reducer;