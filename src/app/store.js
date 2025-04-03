import { configureStore } from '@reduxjs/toolkit'
import commentReducer from '../features/comment/comment-slice'
import postReducer from '../features/post/post-slice'
import userReducer from '../features/user/user-slice'

export const store = configureStore({
  reducer: {
    comment:commentReducer,
    post:postReducer,
    user:userReducer
  }
})