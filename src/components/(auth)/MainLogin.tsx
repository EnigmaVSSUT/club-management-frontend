import React from 'react'
import Login from './Login'
import LoginBox from './LoginBox'
import { Box } from '@mui/material'

function MainLogin() {
  return (
    <Box bgcolor='#1E1E1E'>
      <Login/>
      <LoginBox/>
    </Box>
  )
}

export default MainLogin
