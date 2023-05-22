import React, { useEffect, useRef } from "react";
// import sections
import Hero from "./Hero";
import AboutUsSection from "./AboutUsSection";
import SmallGroup from "./SmallGroup";
import FutureGoverning from "./FutureGoverning";
import WorkInquiries from "./WorkInquiries";
import FindOpportunintes from "./FindOpportunintes";
import GoverningStructure from "./GoverningStructure";
import FutureGoverningNext from "./FutureGoverningNext";
import BloomingVison from "./BloomingVison";
import KingdomInitiator from "./KingdomInitiator";
import VariousInfrastructure from "./VariousInfrastructure";
import GetInvolved from "./GetInvolved";
import GetInTouch from "./GetInTouch";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <SmallGroup />
      <FutureGoverning />
      <FutureGoverningNext />
      <WorkInquiries />
      <GoverningStructure />
      <FindOpportunintes />
      <GoverningStructure />
      <BloomingVison />
      <KingdomInitiator />
      <VariousInfrastructure />
      <GetInvolved />
      <GetInTouch />
    </>
  );
}

export default HomePage;
