import { createSlice  } from "@reduxjs/toolkit";


const initialState = [
    {
        id : 1,
        title: 'title',
        body : 'body'
    }
];
export const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        addPost : (state, action) => {
            state.push(action.payload)
        }
    }
})

export const allposts = (state) => state.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;