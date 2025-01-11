import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

type Achievement = {
  image: string;
  title: string;
  description: string;
};

interface AchievementCardProps {
  event: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ event }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        backgroundColor: '#2A2A2A',
        color: '#ffffff',
        marginBottom: 2,
        width: isMobile ? '100%' : '950px',
        borderRadius: '8px',
        gap: isMobile ? '10px' : '20px',
        maxWidth: isMobile ? '70vw' : '90vw', 
        marginTop: isMobile ? 1 : 0.5, 
        alignItems: 'center',
        border: '1px',
        borderColor: '2A2A2A',
        ":hover": {
          cursor: 'auto'
        }
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: isMobile ? '100%' : 200,
          height: isMobile ? 160 : 'auto',
        }}
        image={event.image}
        alt={event.title}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          gap: '5px',
          padding: isMobile ? 2 : 0,
        }}
      >
        <CardContent sx={{ flex: '1 0 auto', justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: isMobile ? '14px' : '18px',
              fontFamily: 'Poppins',
            }}
          >
            {event.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginTop: 1,
              color: '#BDBDBD',
              fontSize: isMobile ? '12px' : '14px',
              fontFamily: 'Poppins',
            }}
          >
            {event.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default AchievementCard;
