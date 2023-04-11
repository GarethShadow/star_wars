import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../Assets/Images/Star_Wars_logo-1.png";
import "./Header.styles.css";
import paths from "../../AppRouter/paths";

const Header = () => {
  const menuData = [
    {
      label: "People",
      link: paths.people
    },
    {
      label: "Planets",
      link: paths.planets
    },
    {
      label: "Starships",
      link: paths.starships
    },
  ]

  return (
    <div className="header d-flex">
      <Link className="logo" to="/">
        <img className="image" src={Logo} alt="header logo"/>
      </Link>
      <ul className="d-flex">
        {menuData.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;