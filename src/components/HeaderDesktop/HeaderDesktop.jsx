import NavLink from "../NavLink/NavLink";
import "./HeaderDesktop.scss";

import linkedinImg from "../../assets/images/linkedin.jpg";

export default function HeaderDesktop() {
    return (
        <div className="header-desktop">
            <div className="header-desktop__social">
                <h4>FOLLOW ME</h4>
                <div className="header-desktop__social-ctn">
                    <a
                        href="https://www.linkedin.com/in/timo-huennebeck/"
                        target="_blank"
                        className="header-desktop__social-ctn-linkedin"
                    >
                        <img
                            className="header-desktop__social-ctn-linkedin-img"
                            src={linkedinImg}
                            alt="linkedin"
                        />
                    </a>
                </div>
            </div>
            <div className="header-desktop__links">
                <NavLink name="Home" href="#home" />
                <NavLink name="About" href="#about" />
                <NavLink name="Projects" href="#projects" />
                <NavLink name="Email" href="mailto:hello@timohuennebeck.com" />
            </div>
        </div>
    );
}
