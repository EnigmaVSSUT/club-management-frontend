import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div>
      <Stack direction='row' spacing={2} py={3} sx={{alignItems:'center',justifyContent:"center"}}>
        <Typography variant='body1' >Logging in as : </Typography>
        <Button color='primary' size='medium' variant='contained'>Member</Button>
        <Button color='inherit' size='medium' variant='contained'>Admin</Button>
      </Stack>
    </div>
  )
}

export default Login
