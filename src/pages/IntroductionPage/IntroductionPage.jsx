import "./IntroductionPage.scss";

import profileImg from "../../assets/images/portrait.png";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";
import NavBar from "../../components/NavBar/NavBar";

export default function IntroductionPage() {
    return (
        <div className="introduction" id="home">
            <NavBar />
            <div className="introduction__sub">
                <div className="introduction__sub-content">
                    <h1 className="introduction__sub-content-header">
                        I'm <span className="introduction__sub-content-header-color">Timo</span>, a
                        <br /> Full-Stack Developer
                    </h1>
                    <p className="introduction__sub-content-paragraph">
                        Fast-learning, web development bootcamp graduate with a penchant for
                        creating ‘problem-solving products’, with a background in e-commerce, and
                        digital marketing. Developed a web application to semi-automate cover letter
                        writing procedures, saving on avg. 5 - 10 mins. per application.
                    </p>
                </div>
                <div className="introduction__sub-ctn">
                    <img className="introduction__sub-ctn-img" src={profileImg} alt="profile" />
                </div>
                <div className="introduction__sub-content-learn-more">
                    <LearnMoreField
                        name="ABOUT ME"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        href="#about"
                    />
                    <LearnMoreField
                        name="MY WORK"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        href="#projects"
                    />
                </div>
            </div>
        </div>
    );
}
