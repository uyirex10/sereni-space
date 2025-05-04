import React from "react";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import BreathingSection from "../components/sections/BreathingSection";
import RoomsSection from "../components/sections/RoomsSection";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <BreathingSection />
      <RoomsSection />
      <CTASection />
    </>
  );
};

export default Home;
