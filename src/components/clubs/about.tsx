'use client';

import { useState } from 'react';
import {  Box, Grid  } from '@mui/material';
import FastFlipCounter from './Counter';

export default function CounterWrapper() {
    const [startAnimation, setStartAnimation] = useState(false);

    const handleStartAnimation = () => {
        setStartAnimation(true);
    };

    return (
        <Box
            onMouseEnter={handleStartAnimation}
            onFocus={handleStartAnimation}
            tabIndex={0}
            sx={{ display: 'block', width: '100%', backgroundColor: '#1E1E1E', py: 2 }}
        >
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={4}>
                    <Box sx={{ px: { xs: 2, sm: 4 }, textAlign: 'center' }}>
                        <FastFlipCounter totalCount={10} startAnimation={startAnimation} color={"#34A853"} description='Clubs and societies' />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ px: { xs: 2, sm: 4 }, textAlign: 'center' }}>
                        <FastFlipCounter totalCount={12000} startAnimation={startAnimation} color={"#FBBC04"} description='Active Club Members' />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ px: { xs: 2, sm: 4 }, textAlign: 'center' }}>
                        <FastFlipCounter totalCount={20} startAnimation={startAnimation} color={"#EA4335"} description='Ongoing Projects and events' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}