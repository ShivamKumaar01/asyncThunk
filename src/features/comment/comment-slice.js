import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const commentsPosts = createAsyncThunk("commentThunk", async () => {
  try {
    const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`);
    // console.log(posts,"this is posts posts");
    // const postLists=posts.data;
    // console.log("this is postlist",postLists)
    console.log("this is comments",comments)

    return comments;
  } catch (error) {
    throw new Error("Error fetching todos");
  }
});

const commentSlice=createSlice({
  name:"comment",
  initialState:{
    isLoading:false,
    data:null,
    error:false
  },
  

})
export default commentSlice.reducer