import NavLink from "../NavLink/NavLink";
import "./Header.scss";

import linkedinImg from "../../assets/images/linkedin.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="header__social">
                <h4>FOLLOW ME</h4>
                <img className="header__social-linkedin" src={linkedinImg} alt="linkedin" />
            </div>
            <div className="header__links">
                <NavLink name="Home" href="#home"/>
                <NavLink name="About" href="#about" />
                <NavLink name="Portfolio" href="#portfolio" />
                <NavLink name="Email" href="#email"/>
            </div>
        </div>
    );
}
