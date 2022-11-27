import "./HeaderDesktop.scss";

import NavLink from "../NavLink/NavLink";

export default function HeaderDesktop() {
    return (
        <div className="header-desktop">
            <div className="header-desktop__social">{/* <h2>TIMO HUENNEBECK</h2> */}</div>
            <div className="header-desktop__links">
                <NavLink name="Home" href="#home" />
                <NavLink name="Projects" href="#projects" />
                <NavLink name="About Me" href="#about" />
                <a
                    className="header-desktop__links-linkedin"
                    href="https://www.linkedin.com/in/timo-huennebeck/"
                    target="_blank"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
