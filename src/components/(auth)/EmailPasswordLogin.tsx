'use client';

import { Box, Stack, TextField, InputAdornment,  Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '@/validation/authSchema';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
// import Right from '../Events and news/Components/Right';

type FormData = {
  email: string;
  password: string;
  username?: string; 
};

type AuthProps = {
  authType: 'sign-in' | 'sign-up';
  isAdmin: boolean;
};

function EmailPasswordLogin({ authType, isAdmin }: AuthProps) {


  const schema = authType === 'sign-up' ? signupSchema : loginSchema;
  
  const { handleSubmit, formState: { errors , isSubmitting }, reset, control, trigger } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      username: authType === 'sign-up' ? '' : undefined,
    },
  });

  useEffect(() => {
    reset();
  }, [authType, isAdmin,reset]);

  // const [formInteracted, setFormInteracted] = useState(false); 
  // const [formSubmitted, setFormSubmitted] = useState(false);

  async function onSubmit(data: FormData) {
    await new Promise<void>((resolve) => setTimeout(resolve,5000))
    console.log('Form submitted:', data);
  }

  const handleBlur = (fieldName: keyof FormData) => {
    
    // setFormInteracted(true);
    trigger(fieldName);  
  };

  return (
    <Box sx={{ width: "100%" ,px: { xs: 2, sm: 6, md: 12 },}} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>

          {}
          {authType === 'sign-up' && (
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                  placeholder="Enter your username"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: '#424242' }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      border: "2px solid #424242",
                    },
                  }}
                  error={!!errors.username}
                  helperText={errors.username ? errors.username.message : null} 
                  onBlur={() => handleBlur('username')} 
                />
              )}
            />
          )}

          {}
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field} 
                variant="outlined"
                fullWidth
                size="small"
                required
                type="email"
                placeholder="Enter your email address"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: '#424242' }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #424242",
                  },
                }}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : null} 
                onBlur={() => handleBlur('email')} 
              />
            )}
          />

          {}
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                size="small"
                required
                type="password"
                placeholder="Enter your password"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: '#424242' }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #424242",
                  },
                }}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : null} 
                onBlur={() => handleBlur('password')} 
              />
            )}
          />
        </Stack>

        {}
        <Stack>
        <Stack direction={'row'} justifyContent={'right'}>
        <Button
          variant='text' color='error'
          sx={{ textAlign: 'right', cursor: 'pointer' ,pt: '10px',pb: '5px' , backgroundColor: 'transparent' , fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, textTransform: 'none'}}
          disableRipple
          onClick={() => reset()}
        >
          Reset
        </Button>
        </Stack>

        {}
        <Stack>
        {authType === 'sign-in' && (
          <Stack direction={'row'} justifyContent={'right'}>
          <Button
            variant='text'
            sx={{ textDecoration: 'underline', textAlign: 'right', cursor: 'pointer', backgroundColor: 'transparent' , fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' } , textTransform: 'none' , color: '#757575'}}
            disableRipple
          >
            Forgot Password ?
          </Button>
          </Stack>
        )}
        </Stack>
</Stack>
        <Button type="submit" variant='contained' size='large' fullWidth={true} sx={{ my: '30px','&.Mui-disabled': {
      backgroundColor: '#6DA4FF',  
      color: '#FFFFFF',            
    }, }} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : authType === 'sign-in' ? 'Log In' : 'Sign Up'}
        </Button>
      </form>
    </Box>
  );
}

export default EmailPasswordLogin;
