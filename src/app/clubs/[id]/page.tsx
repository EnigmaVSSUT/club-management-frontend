"use client";
import * as React from 'react';
import {useEffect} from "react"
import type { NextPage } from 'next';
import Navbar from '@/components/Member/nav1';
import Home from '@/components/ClubDetail/Home';
import Member from '@/components/ClubDetail/Member';
import Projects from '@/components/ClubDetail/Projects';
import ImageWithText from '@/components/Member/herosection';
import Achievements from '@/components/achievement/achievement';
// import Events from '@/components/events/Events';
import { imagesArray,fetchMembers,fetchAchievements } from '@/constants';
import Carousel from '@/components/subComponents/herosection1';

const ClubsDetails: NextPage = () => {
  const [activeLink, setActiveLink] = React.useState<string>('home');

  useEffect(() => {
    fetchMembers(); 
    fetchAchievements();
  }, []); 
  return (
    <>
      <div className="content">
        {activeLink === 'home' && <Carousel imagesArray={imagesArray} interval={3000} />}
        {activeLink === 'members' && <ImageWithText 
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
        />}
        {activeLink === 'projects' && <div style={{height: '100px'}}></div>}
        {activeLink === 'achievements' && <div style={{height: '100px'}}></div>}
      </div>

      <div style={{ position: 'sticky', top: 0,zIndex: 1000, width: '100%' , transform: 'translateY(-75px)' }}>
        <Navbar onLinkChange={setActiveLink} />
      </div>
      <div className="content">
        {activeLink === 'home' && <Home />}
        {activeLink === 'members' && <Member />}
        {activeLink === 'projects' && <Projects />}
        {activeLink === 'achievements' && <Achievements />}
        {/* {activeLink === 'events' && <Events />} */}
      </div>
    </>
  );
}

export default ClubsDetails;
