import "./HeaderMobile.scss";
import NavLink from "../NavLink/NavLink";

export default function HeaderMobile({ setModalIsOpen }) {
    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="header-mobile" onClick={closeModal}>
            <div className="header-mobile__svg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    className="header-mobile__svg-img"
                >
                    <path d="M3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L3.5,7 Z M3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L3.5,12 Z M3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L3.5,17 Z" />
                </svg>
            </div>
            <div className="header-mobile__links">
                <NavLink name="Home" href="#home" />
                <NavLink name="Projects" href="#projects" />
                <NavLink name="About Me" href="#about" />
                <NavLink name="LinkedIn" href="https://www.linkedin.com/in/timo-huennebeck/" />
            </div>
        </div>
    );
}
