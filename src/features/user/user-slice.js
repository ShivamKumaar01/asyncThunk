import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const users = createAsyncThunk("userThunk", async () => {
  try {
    const user = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(posts,"this is posts posts");
    // const postLists=posts.data;
    const userList=user.data;
    console.log(userList)
    // console.log("this is postlist",postLists)

    return userList;
  } catch (error) {
    throw new Error("Error fetching todos");
  }
});



const userSlice=createSlice({
  name:"user",
  initialState:{
    isLoading:false,
    data:null,
    error:false
  },
  extraReducers:(builder)=>{
      builder.addCase(users.pending,(state,action)=>{
        state.isLoading=true
      });
      builder.addCase(users.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.data=action.payload
      
      })
      builder.addCase(users.rejected,(state,action)=>{
        state.error=true
      })
    }
})
export default userSlice.reducer