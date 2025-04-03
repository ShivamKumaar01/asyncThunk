import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostCard from './posts-card'
import Address from './address'
import { AppBar } from '@mui/material'
import Sidebar from './side-bar'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <AppBar></AppBar>
                <PostCard></PostCard>
                <Sidebar />
              </>
            }
          />

          <Route
            path='/user'
            element={
              <>
                <AppBar />
                <Address />
                <Sidebar />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
