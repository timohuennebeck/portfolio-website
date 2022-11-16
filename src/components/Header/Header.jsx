import NavLink from "../NavLink/NavLink";
import "./Header.scss";

import linkedinImg from "../../assets/images/linkedin.jpg";

export default function Header() {
    return (
        <div className="header">
            <div className="header__social">
                <h4>FOLLOW ME</h4>
                <a href="https://www.linkedin.com/in/timo-huennebeck/" target="_blank">
                    <img className="header__social-linkedin" src={linkedinImg} alt="linkedin" />
                </a>
            </div>
            <div className="header__links">
                <NavLink name="Home" href="#home" />
                <NavLink name="About" href="#about" />
                <NavLink name="Portfolio" href="#portfolio" />
                <NavLink name="Email" href="mailto:hello@timohuennebeck.com" />
            </div>
        </div>
    );
}
