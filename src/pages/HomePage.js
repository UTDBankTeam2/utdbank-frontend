import React from "react";
import Topbar from "../components/common/Topbar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/HomeAbout";
import Counters from "../components/home/Counters";
import Facility from "../components/home/Facility";
import HomeContact from "../components/home/HomeContact";
import HomePricing from "../components/home/HomePricing";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counters />
      {/* homeservice gelecek */}
      <HomePricing/>
      <Facility />
      <HomeContact />
      {/* Testimonal gelecek */}
    </>
  );
};

export default HomePage;
