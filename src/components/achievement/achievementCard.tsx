import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack, Box, useMediaQuery, useTheme } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
// import { moveCursor } from 'readline';

type Achievement = {
  image: string;
  title: string;
  faculty: string;
  date: string;
  location: string;
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
        <CardContent sx={{ flex: '1 0 auto' , justifyContent: 'center' , alignItems: 'center'}}>
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

          <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: 1 }}>
            <PersonIcon sx={{ color: '#BDBDBD', fontSize: 18 }} />
            <Typography
              variant="body2"
              sx={{
                color: '#BDBDBD',
                fontWeight: 300,
                fontSize: isMobile ? '11px' : '14px', 
                fontFamily: 'Poppins',
              }}
            >
              {event.faculty}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: 1 }}>
            <CalendarTodayIcon sx={{ color: '#BDBDBD', fontSize: 18 }} />
            <Typography
              variant="body2"
              sx={{
                color: '#BDBDBD',
                fontWeight: 300,
                fontSize: isMobile ? '11px' : '14px', 
                fontFamily: 'Poppins',
              }}
            >
              {`${event.date} ${event.location}`}
            </Typography>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default AchievementCard;
