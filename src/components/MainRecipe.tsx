import FindRecipe from "./FindRecipe";
import Nav from "./Nav";
import React from "react";

const MainRecipe = () => {
  return (
    <>
      <Nav HeaderTxt="Home" Path="/" />
      <FindRecipe />
    </>
  );
};

export default MainRecipe;
