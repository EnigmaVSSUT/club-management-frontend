'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'; 

export default function FastFlipCounter({
    totalCount,
    color,
    description,
    intialCount = 7,
    skip = totalCount / 10,
    textColor = color,
    startAnimation = false, 
}: {
    totalCount: number;
    color: string;
    description: string;
    intialCount?: number;
    skip?: number;
    textColor?: string;
    startAnimation?: boolean;
}) {
    const [count, setCount] = useState(intialCount);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const startCounter = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount + skip >= totalCount) {
                    clearInterval(intervalRef.current!);
                    return totalCount;
                }
                return prevCount + skip;
            });
        }, 80);
    }, [setCount,skip,totalCount])

    useEffect(() => {
        if (startAnimation) {
            startCounter();
        }
    }, [startAnimation,startCounter]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%', overflow: 'hidden', bgcolor: '#1E1E1E' }} 
        >
            <Box
                sx={{
                    position: 'relative',
                    width: isMobile ? '150px' : '270px',  // Responsive width
                    overflow: 'hidden',
                    bgcolor: '#1E1E1E',
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2, 
                }}
            >
                <Stack spacing={1} sx={{ width: '100%' }}>
                    <Stack direction={'row'} justifyContent="center" gap={1}>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={count}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                <Typography 
                                    variant="h1" 
                                    component="span" 
                                    sx={{ 
                                        fontWeight: 'bold', 
                                        fontSize: isMobile ? '32px' : '48px',
                                        color: textColor, 
                                        overflow: "hidden", 
                                        lineHeight: isMobile ? '48px' : '72px',  
                                    }}
                                >
                                    {count}
                                </Typography>
                            </motion.div>
                        </AnimatePresence>
                        <Typography 
                            variant="h1" 
                            component="span" 
                            sx={{ 
                                fontWeight: 'bold', 
                                fontSize: isMobile ? '32px' : '48px',  
                                color: textColor, 
                                lineHeight: isMobile ? '48px' : '72px', 
                            }}
                        >
                            +
                        </Typography>
                    </Stack>
                    <Typography 
                        variant="h3" 
                        color='#BDBDBD' 
                        fontSize={isMobile ? '18px' : '24px'}  
                        fontWeight={600} 
                        sx={{
                            wordWrap: "break-word", 
                            textAlign: 'center',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {description}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}