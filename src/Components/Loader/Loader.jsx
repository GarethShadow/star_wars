import React from "react";
import "./Loader.Styled.css";
import LoaderGif from "../../Assets/Images/star-wars-loading.gif"

const Loader = () => {
  return (
    <div className="loader">
      <img src={`${LoaderGif}?${Date.now()}`} alt="Loader-animation"/>
    </div>
  );
};

export default Loader;