'use client';

import { Box, Stack, TextField, InputAdornment, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './authSchema'; // Zod schema
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

// Define types based on your Zod schema
type FormData = {
  email: string;
  password: string;
};

function EmailPasswordLogin() {
  // Initialize React Hook Form with Zod validation
  const { handleSubmit, formState: { errors }, reset, control, trigger } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const [formInteracted, setFormInteracted] = useState(false); // Track if the form was interacted
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form has been submitted

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
    setFormSubmitted(true);  // Set form as submitted
    reset();
  };

  const handleBlur = (fieldName: keyof FormData) => {
    // When a field loses focus, set form as interacted
    setFormInteracted(true);
    trigger(fieldName);  // Validate the field on blur
  };

  return (
    <Box sx={{ width: "100%" }} px={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>

          {/* Email Field with React Hook Form's Controller */}
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field} // Controller will pass props here
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
                helperText={errors.email ? errors.email.message : null} // Display error message if validation fails
                onBlur={() => handleBlur('email')} // Trigger validation and set form as interacted
              />
            )}
          />

          {/* Password Field with React Hook Form's Controller */}
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field} // Controller will pass props here
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
                helperText={errors.password ? errors.password.message : null} // Display error message if validation fails
                onBlur={() => handleBlur('password')} // Trigger validation and set form as interacted
              />
            )}
          />
        </Stack>

        {/* Reset functionality */}
        <Typography
          variant='body2'
          sx={{ textDecoration: 'underline', color: '#757575', textAlign: 'right', cursor: 'pointer' }}
          onClick={() => reset()}
        >
          Reset
        </Typography>

        {/* Show error message if form is interacted but not yet submitted */}
        {/* {formInteracted && !formSubmitted && (
          <Typography
            variant='body2'
            sx={{ color: 'red', textAlign: 'center', mt: 2 }}
          >
            Form isn't submitted!
          </Typography>
        )} */}

        <Typography variant='body2' sx={{ textDecoration: 'underline', color: '#757575', textAlign: 'right' }}>
          Forgot password?
        </Typography>

        <Button type="submit" variant='contained' size='large' fullWidth={true} sx={{ my: '30px' }}>
          LogIn
        </Button>
      </form>
    </Box>
  );
}

export default EmailPasswordLogin;
