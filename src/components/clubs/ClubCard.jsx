"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { RadialBarChart, RadialBar, PolarGrid, PolarRadiusAxis } from "recharts";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import Image from 'next/image';
const ClubCard = ({ name, description, logo,id, members = 200 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/clubs/${id}`);
  };
  const chartData = [
    { name: "Members", members: 200, fill: "#ff4d4f" },
  ];

  return (
    <Card
      sx={{
        backgroundColor: '#252525',
        color: '#ffffff',
        textAlign: 'center',
        width: { xs: '90%', sm: '85%', md: '80%',lg:"80%" },
        maxWidth: '600px', 
        height: '318px', 
        transition: 'width 0.3s ease', 
        position: 'relative', 
        overflow: 'visible',
        margin: { xs: '0 1rem', sm: '0 2rem', md: '0 1rem'},
        boxShadow: '0px 8px 15px 0px #00000040',
        borderRadius: '8px' ,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer"
        
      }}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
      onClick={handleClick} 
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',  
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '0.5rem', md: '1rem' },
          position: 'relative',
        }}
      >
          {isHovered && (
          <Typography variant="h6" style={{ marginBottom: '10px', fontWeight: '600' }} fontFamily={'poppins'}>
            {name}
          </Typography>
        )}

        {!isHovered && (
            <Image
            src={logo}
            alt={name}
            width={80}
            height={80}
            style={{
              transition: 'opacity 0.3s ease',
              // margin: 25,
            }}
          />
        )}

        {isHovered && (
          <div style={{ width: '100px', height: '100px' }}>
            <RadialBarChart
              width={100}
              height={100}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={50}
              barSize={10}
              data={chartData}
              startAngle={90}
              endAngle={450}
            >
              <PolarGrid radialLines={false} />
              <PolarRadiusAxis tick={false} axisLine={false} />

              <RadialBar
                dataKey="members"
                cornerRadius={10} 
                fill="#ff4d4f" 
                background={false} 
                stroke="none"
              />

        
              <text
                x={50} 
                y={50} 
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: '1.5rem',
                  fill: '#fff', 
                  fontWeight: 'bold',
                }}
              >
                {members}
              </text>
            </RadialBarChart>
          </div>
        )}

        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBlock: '10px',
          }}
        >
          
          {!isHovered && (<Stack>
            <Typography variant="h6" style={{ marginBottom: '10px', fontWeight: '600' , color:'#ffffff'}} fontFamily={'poppins'}>
            {name}
          </Typography>
            <Typography variant="body2" fontFamily={'Poppins'} sx={{fontSize: '16px' , fontWeight: 600 , color: "#BDBDBD"}}>{description}</Typography>
            </Stack>
          )}

          
          {isHovered && (
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              style={{
                backgroundColor: '#ffcc00', 
                color: '#000', 
                marginTop: '15px',
                fontWeight: 'bold',
                borderRadius: '20px', 
                padding: '8px 16px', 
                textTransform: 'none', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)', 
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e6b800')} 
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffcc00')} 
            >
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClubCard;




