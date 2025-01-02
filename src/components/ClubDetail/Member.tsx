"use client";
import React from 'react';
// import ImageWithText from '@/components/Member/herosection';
import { Stack, Typography } from '@mui/material';

import CardSection from '@/components/Member/ClubSection2';
import { profiles1 } from '@/constants';

const Page: React.FC = () => {
  return (
    <div>
      <Stack 
        sx={{ 
          backgroundColor: '#1E1E1E', 
          padding: { xs: 1, sm: 2 },
          textAlign: 'center' 
        }}
      >
        {/* <ImageWithText 
          imageUrl="/ClubPIC1.jpg" 
          heading="Our Team Members" 
          paragraph={
            <>
              Our club consists of around 200-250 active members, structured to ensure effective organization and management.
              The team usually includes 4-5 faculty advisors who guide the club&apos; activities and ensure alignment with university goals.
              The leadership comprises a coordinator and an assistant coordinator, who are responsible for overseeing the club&apos; functioning and event planning.
              There are also 6-8 domain leads, each specializing in different areas, such as web development, robotics, content, or event management, depending on the club&apos; focus.
              The remaining members actively participate in various roles, including technical development, content creation, and logistics, contributing to the club&apos; projects and events.
            </>
          }
        /> */}

        <Typography 
          variant="h5" 
          sx={{ 
            color: '#fff', 
            // marginY: 2, 
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem' }, 
            fontFamily: 'Poppins , sans-serif',
            fontWeight: 600
          }}
        >
          All Members
        </Typography>

        <CardSection profiles={profiles1} />
      </Stack>
    </div>
  );
};

export default Page;
