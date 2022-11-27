import "./HeaderDesktop.scss";

import NavLink from "../NavLink/NavLink";

export default function HeaderDesktop() {
    return (
        <nav className="header-desktop">
            <div className="header-desktop__name">
                <NavLink name="Timo Huennebeck" href="#home" />
            </div>
            <ul className="header-desktop__links">
                <li>
                    <NavLink name="Projects" href="#projects" />
                </li>
                <li>
                    <NavLink name="About Me" href="#about" />
                </li>
                <li>
                    <a
                        className="header-desktop__links-linkedin"
                        href="https://www.linkedin.com/in/timo-huennebeck/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </nav>
    );
}
