import React from "react";
import Logo from "../../Assets/Images/Star_Wars_logo-1.png";
import "./Header.styles.css";

const Header = () => {
    const menuData = [
        {
        label: "People",
        link: "/"
        },
        {
            label: "Planets",
            link: "/"
        },
        {
            label: "Starships",
            link: "/"
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