"use client";
// import MainLogin from "@/components/(auth)/MainLogin";
import Carousel from "@/components/carousal/Carousal";
import EventsAndNews from "@/components/Events and news/EventsAndNews";
import About from "@/components/AboutSec/AboutVssut";
import UpEve from "@/components/UpCommingEve/UpCommingEve";
import Alumni from "@/components/Alumni/Alumni";
import Thought from "@/components/Thought_of_day/Thought";
import { images,clubs } from "@/constants/index";

// import MediaControlCard from "@/components/achievement/achievement";
import ClubSection from "@/components/clubs/ClubSection";
import CounterWrapper from "@/components/clubs/about";
// import AchievementCard from "@/components/achievement/achievementCard";

// import React, { useState } from 'react';
// import Login from "@/components/(auth)/Login";
// import EmailPasswordLogin from "@/components/(auth)/EmailPasswordLogin";

export default function Home() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="no-scrollbar">
       {/* <MainLogin/> */}
      
      <Carousel imagesArray={images} interval={5000} />
      <About />
      <CounterWrapper />
      <ClubSection clubs={ clubs}/>
      <EventsAndNews />
      <UpEve />
      <Alumni />
      <Thought />
    </div>
  );
}