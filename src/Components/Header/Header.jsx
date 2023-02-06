import React from "react";
import Logo from "../../Assets/Images/Star_Wars_logo-1.png";
import "./Header.styles.css";
import paths from "../../AppRouter/paths";

const Header = () => {
    const menuData = [
        {
        label: "People",
        link: paths.home
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
            <a className="logo" href="/">
                <img className="image" src={Logo} alt="header logo"/>
            </a>
            <ul className="d-flex">
                {menuData.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;