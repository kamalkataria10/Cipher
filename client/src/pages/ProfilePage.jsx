import React, { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Heatmap from "../components/Heatmap";
import InfoV2 from "../components/InfoV2";
import Interests from "../components/Interests";
import ProfInfoV2 from "../components/ProfInfoV2";
import Password from "../components/Password";
const ProfilePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Heatmap />
      <InfoV2 />
      <ProfInfoV2 />
      <Password />
      <Interests />
    </>
  );
};

export default ProfilePage;
