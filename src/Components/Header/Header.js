import "./style_header.css";
import Logo from "../../Images/Star_Wars_logo-1.png";

const Header = () => {
    return (
        <div className="header d-flex">
            <a className="logo" href="#">
                <img style={{width: "150px"}} src={Logo} alt=""/>
            </a>
            <ul className="d-flex">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;