"use client";

import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { RadialBarChart, RadialBar, PolarGrid, PolarRadiusAxis } from "recharts";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 

const ClubCard = ({ name, description, logo, members = 200 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const chartData = [
    { name: "Members", members: 200, fill: "#ff4d4f" },
  ];

  return (
    <Card
      style={{
        backgroundColor: '#1d1d1d',
        color: '#ffffff',
        textAlign: 'center',
        width: 300, 
        height: 250, 
        transition: 'width 0.3s ease', 
        position: 'relative', 
        overflow: 'visible',
        margin: '1rem auto', 
      }}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',  
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          position: 'relative', 
        }}
      >
        {isHovered && (
          <Typography variant="h6" style={{ marginBottom: '10px', fontWeight: 'bold' }}>
            {name}
          </Typography>
        )}

        {!isHovered && (
          <img
            src={logo}
            alt={name}
            style={{
              width: 100, 
              height: 100, 
              transition: 'opacity 0.3s ease',
              boxShadow: '0 4px 8px rgba(128, 128, 128, 0.5)', 
              margin: 30
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
              <PolarGrid radialLines={false} stroke="none" />
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
                200
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
            marginTop: '10px',
          }}
        >
          {!isHovered && (
            <Typography variant="body2">{description}</Typography>
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
