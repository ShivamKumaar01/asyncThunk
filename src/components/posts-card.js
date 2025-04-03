import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { listPosts } from '../features/post/post-slice'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';

const PostCard = () => {
  const dispatch = useDispatch()
  const dataobj = useSelector((store) => store.post)
  // console.log(dataobj, 'bhai isi pe map lagana hai')
  console.log(dataobj.posts, 'ispe map lagao yaar')
  
  useEffect(() => {
    dispatch(listPosts())
   
  }, [])
  function clickHandler(e){
    console.log(`hellow i m ${e}`);
  }
  return (
    <>
      <Box>
        
      <Box component='section' sx={{ pl: 20, border: '3px solid grey', display:'flex' ,flexWrap:'wrap', marginTop:7,marginLeft:20 }}>
        {
          dataobj.posts===null ? <CircularProgress/>: dataobj.posts.map((post,index) => {
            return (
             
              <Card sx={{ maxWidth: 275, backgroundColor: 'lightyellow',margin:'2px' ,borderRadius:"8px" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: 'text.secondary', fontSize: 14 }}
                  >
                    card {post.id}
                  </Typography>
  
                
                  <Typography variant='body2'>
                    {post.body}
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={(e)=>clickHandler(index)} size='small'>Comments</Button>
                </CardActions>
              </Card>
              
            )
          })
        }
      </Box> 
      </Box>
    </>
  )
}

export default PostCard
