import "./NavBar.scss";

import HeaderDesktop from "../../components/HeaderDesktop/HeaderDesktop";
import ReactModal from "react-modal";
import { useState } from "react";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";

export default function NavBar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="nav-bar">
            <div className="nav-bar__mobile">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="nav-bar__mobile-svg"
                    onClick={openModal}
                >
                    <path d="M3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L3.5,7 Z M3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L3.5,12 Z M3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L3.5,17 Z" />
                </svg>
            </div>

            <div className="nav-bar__desktop">
                <HeaderDesktop />
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="nav-bar__card-modal"
            >
                <HeaderMobile setModalIsOpen={setModalIsOpen} />
            </ReactModal>
        </div>
    );
}
