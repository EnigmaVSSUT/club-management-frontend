import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import EmailPasswordLogin from './EmailPasswordLogin';
import OtherLogin from './OtherLogin';

function LoginDetails({ authType, setAuthType, isAdmin }: { authType: 'sign-in' | 'sign-up'; setAuthType: (type: 'sign-in' | 'sign-up') => void; isAdmin: boolean }) {
  // const handleSignUpClick = () => {
  //   setAuthType('sign-up');
  // };

  return (
    <>
      {/* Pass authType to EmailPasswordLogin */}
      <EmailPasswordLogin authType={authType} isAdmin={isAdmin} />
      {!isAdmin && (
        <>
          <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }} px={12}>
            <Box sx={{ borderTop: '1px solid #424242', flexGrow: '1' }}></Box>
            <Typography sx={{ color: '#424242' }}>OR</Typography>
            <Box sx={{ borderTop: '1px solid #424242', flexGrow: '1' }}></Box>
          </Stack>
          <OtherLogin setAuthType={setAuthType} authType={authType} />
        </>
      )}
      <Box my={8} mb={8} pb={8}>
        <Typography variant='body1' component='span' sx={{ color: '#424242', fontWeight: 'bold' }}>
          MADE WITH <Typography variant='body1' component='span' sx={{ color: 'green', fontWeight: 'bold' }}> ENIGMA</Typography>
        </Typography>
      </Box>
    </>
  );
}

export default LoginDetails;
