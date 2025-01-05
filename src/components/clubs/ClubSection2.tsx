"use client"
import React, { useState } from 'react';
import { Button, Box, Grid } from '@mui/material';
import ClubCardWrapper from './ClubCard';

interface Club {
  name: string;
  description: string;
  logo: string;
  id:string
}

interface ClubsSectionProps {
  technicalClubs: Club[];
  nonTechnicalClubs: Club[];
}

const ClubsSection: React.FC<ClubsSectionProps> = ({ technicalClubs = [], nonTechnicalClubs = [] }) => {
  const [activeSection, setActiveSection] = useState<'technical' | 'nonTechnical'>('technical');

  const handleToggle = (section: 'technical' | 'nonTechnical') => {
    setActiveSection(section);
  };

  const buttonStyle = (isActive: boolean) => ({
    color: isActive ? '#ffffff' : '#424242',
    fontFamily: 'Poppins',
    textTransform: 'none',
    fontSize: { xs: '0.7rem', sm: '1rem', md: '1.25rem' },
    padding: '1rem 2rem',
    position: 'relative',
    transition: 'transform 0.3s ease, color 0.3s ease',
    transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      bottom: '0',
      height: '2px',
      width: isActive ? '25%' : '0%',
      backgroundColor: '#ffffff',
      transition: 'width 0.3s ease',
      transform: 'translateX(-50%)',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  });

  return (
    <Box sx={{ paddingBlock: '2rem', backgroundColor: '#1E1E1E', color: '#ffffff'}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} gap={4}>
        <Button
          variant="text"
          onClick={() => handleToggle('technical')}
          sx={buttonStyle(activeSection === 'technical')}
          disableRipple
        >
          Technical Clubs or Societies
        </Button>
        <Button
          variant="text"
          onClick={() => handleToggle('nonTechnical')}
          sx={buttonStyle(activeSection === 'nonTechnical')}
          disableRipple
        >
          Non-Technical Clubs or Societies
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ justifyContent: "center" , alignItems: 'center'}}>
        {(activeSection === 'technical' ? technicalClubs : nonTechnicalClubs).map((club, index) => (
          <Grid item xs={12}  sm={6} md={4} key={index}>
            <ClubCardWrapper
              id={club.id}
              name={club.name}
              description={club.description}
              logo={club.logo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClubsSection;