import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux'
import { users } from '../features/user/user-slice';

function createData(name, email, address,phone) {
  return { name,email, address, phone};
}
const Address = () => {
   const dispatch = useDispatch()
  const userList=useSelector((store)=>store.user)
  console.log(userList);
  useEffect(()=>{
    dispatch(users());
  },[])


  return (
    <>
    <Box p={2} marginTop={7} textAlign={'center'}>Here is the List of Users</Box>
   <Box marginLeft={25} >
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {userList?.data?.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.address.city}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Box>
   
    </>
   
  )
}

export default Address