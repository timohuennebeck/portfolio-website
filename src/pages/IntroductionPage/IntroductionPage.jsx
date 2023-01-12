import "./IntroductionPage.scss";

import profileImg from "../../assets/images/portrait.png";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";
import NavBar from "../../components/NavBar/NavBar";

export default function IntroductionPage() {
    return (
        <div className="introduction" id="home">
            <div className="introduction__nav-bar">
                <NavBar />
            </div>
            <div className="introduction__sub">
                <div className="introduction__sub-content">
                    <h1 className="introduction__sub-content-header">
                        I'm <span className="introduction__sub-content-header-color">Timo</span>,
                        <br />a Frontend Developer
                    </h1>
                    <p className="introduction__sub-content-paragraph">
                        I'm an IBM cloud-certified Frontend Developer with a multifaceted skill set
                        encompassing both front-end and back-end development such as JavaScript,
                        React.js, Redux.js, Node.js and more (see second-last page for the full
                        stack).
                    </p>
                    <p className="introduction__sub-content-paragraph">
                        "I am committed to merge AI and software development to create seamless user
                        experiences."
                    </p>
                </div>
                <div className="introduction__sub-ctn">
                    <img className="introduction__sub-ctn-img" src={profileImg} alt="profile" />
                </div>
                <div className="introduction__sub-content-learn-more">
                    <LearnMoreField
                        name="MY WORK"
                        paragraph="I have a passion for UX design and artificial intelligence, aiming to develop applications that combine these huge interests of mine."
                        href="#projects"
                    />
                </div>
            </div>
        </div>
    );
}
