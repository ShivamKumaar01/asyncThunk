import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const listPosts= createAsyncThunk("postThunk",async()=>{
//   const posts= await fetch('https://jsonplaceholder.typicode.com/posts')
//   return posts.json()
// })
export const listPosts = createAsyncThunk("postThunk", async () => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(posts,"this is posts posts");
    const postLists=posts.data;
    // console.log("this is postlist",postLists)

    return postLists;
  } catch (error) {
    throw new Error("Error fetching todos");
  }
});

const postSlice=createSlice({
  name:"post",
  initialState:{
    isLoading:false,
    posts:null,
    error:false
  },
  extraReducers:(builder)=>{
    builder.addCase(listPosts.pending,(state,action)=>{
      state.isLoading=true
    });
    builder.addCase(listPosts.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.posts=action.payload
    
    })
    builder.addCase(listPosts.rejected,(state,action)=>{
      state.error=true
    })
  }
})
export default postSlice.reducer