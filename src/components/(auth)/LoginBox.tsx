import { Box, Typography } from '@mui/material'
import React from 'react'
import LoginDetails from './LoginDetails'

function LoginBox() {
  return (
    <>
      <Box
        bgcolor='#2A2A2A'
        sx={{ alignItems: 'center', justifyContent: "center", width: "45vw", textAlign: 'center', margin: "auto",  }}
      >
        <Box py={6}>
          <Typography variant='h5' component='h5'>Welcome Back</Typography>
          <Typography variant='body2'>Login and stay connected</Typography>
        </Box>
        <LoginDetails />
      </Box>
    </>
  )
}

export default LoginBox
