import React from "react";
import People from "../../Components/People";
import Planets from "../../Components/Planets";
import Starships from "../../Components/Starships";

const HomePage = () => {
  return (
    <div>
      <People/>
      <Planets/>
      <Starships/>
    </div>
  );
};

export default HomePage;