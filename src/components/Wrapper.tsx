import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import AdditionalSection from "./AdditionalSection";
import Footer from "./Footer";
import CommonRecipe from "./CommonRecipe";
import HealthyLifeSec from "./HealthyLifeSec";

const Wrapper = () => {
  return (
    <div>
      <Nav HeaderTxt="Find Recipe" Path="findRecipe"/>
      <Banner />
      <AdditionalSection />
      <CommonRecipe />
      <HealthyLifeSec />
      <Footer />
    </div>
  );
};

export default Wrapper;
