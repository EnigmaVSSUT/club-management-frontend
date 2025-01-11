"use client";
import * as React from 'react';
import { NextPage } from 'next';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import ClubsSection2 from '@/components/clubs/ClubSection2';
import AboutClub from '@/components/AboutSec/AboutClub';
import { fetchClubs } from '@/constants'; 
import { technicalClubs, nonTechnicalClubs } from '../../constants';

const Clubs: NextPage = () => {
  const [activeSection, setActiveSection] = useState<'technical' | 'nonTechnical'>('technical');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("Fetching initial data...");
      await fetchClubs('Tech');
      await fetchClubs('Non-Tech');
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleToggle = (section: 'technical' | 'nonTechnical') => {
    setActiveSection(section);
  };

  console.log('Active Section in Clubs:', activeSection);

  return (
    <Stack sx={{ backgroundColor: '#1E1E1E' }}>
      <Box sx={{ width: '100%', height: '356px' }}>
      
      </Box>
      
      <AboutClub />

      {loading ? (
        <Box sx={{ color: 'white', textAlign: 'center' }}>Loading...</Box>
      ) : (
        <ClubsSection2 
          technicalClubs={technicalClubs} 
          nonTechnicalClubs={nonTechnicalClubs} 
          handleToggle={handleToggle}
        />
      )}
    </Stack>
  );
};

export default Clubs;
