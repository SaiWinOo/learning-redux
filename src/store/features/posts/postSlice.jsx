import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {act} from "react-dom/test-utils";


const initialState = {
    loading : false,
    posts : [],
    error : false,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
})

export const postSlice = createSlice({
    name : 'posts',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.posts = action.payload;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action)=> {
            state.loading = false;
            state.posts = action.payload;
        })
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.error = true;
            state.loading = false;
            console.log(action.error)
        })
    }
})

export const allposts = (state) => state.posts;
export default postSlice.reducer;