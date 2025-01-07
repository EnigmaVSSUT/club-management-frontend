import React from 'react';
import { Typography, Button, Box , Grid} from '@mui/material';
import ClubCardWrapper from './ClubCard'; 

interface Club {
  name: string;
  description: string;
  logo: string;
  id:string
}

interface ClubsSectionProps {
  clubs: Club[];
}

const ClubsSection: React.FC<ClubsSectionProps> = ({ clubs = []}) => {
  return (
    <>
      <Typography variant="h4" align="center" fontFamily="Poppins" gutterBottom sx={{
        fontSize: { xs: '28px', sm: '36px' },
        color: '#ffffff',
        fontWeight: '600',
        lineHeight: '1.5',
        mt: 4,
      }}>
        Clubs of VSSUT, Burla
      </Typography>
      <Box sx={{ padding: { xs: '1rem', sm: '2rem' }, backgroundColor: '#1E1E1E', color: '#ffffff', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
        <Grid container spacing={0} justifyContent="center">
          {clubs.map((club, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', mt:"16px"}}>
              <ClubCardWrapper
                name={club.name}
                description={club.description}
                logo={club.logo}
                id={club.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f0a500',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#c98e00',
            }
          }}
        >
          Explore All →
        </Button>
      </Box>
</>
  );
};

export default ClubsSection;
