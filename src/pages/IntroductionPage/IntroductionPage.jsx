import "./IntroductionPage.scss";

import profileImg from "../../assets/images/portrait.png";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";
import Header from "../../components/Header/Header";

export default function IntroductionPage() {
    return (
        <div className="introduction" id="home">
            <Header />
            <div className="introduction__sub">
                <div className="introduction__sub-content">
                    <h1 className="introduction__sub-content-header">
                        I'm <span className="introduction__sub-content-header-color">Timo</span>, a
                        <br /> Full-Stack Developer
                    </h1>
                    <p className="introduction__sub-content-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>
                <div className="introduction__sub-ctn">
                    <img className="introduction__sub-ctn-img" src={profileImg} alt="profile" />
                </div>
                <div className="introduction__sub-content-learn-more">
                    <LearnMoreField
                        name="ABOUT ME"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <LearnMoreField
                        name="MY WORK"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </div>
    );
}
