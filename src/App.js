import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from '../src/features/post/post-slice'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import PostCard from './components/posts-card'
import Address from './components/address'

import Drawer from '@mui/material/Drawer'

import CssBaseline from '@mui/material/CssBaseline'

import List from '@mui/material/List'

import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Route, Routes } from 'react-router-dom'
import Router from './components/router'

const drawerWidth = 200

function App() {
  return (
    <>
        <Router></Router>
      

   
    </>
  )
}

export default App
