import "./IntroductionPage.scss";

import profileImg from "../../assets/images/portrait.png";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";

export default function IntroductionPage() {
    return (
        <div className="introduction">
            <div className="introduction__content">
                <h1 className="introduction__content-header">
                    I'm <span className="introduction__content-header-color">Timo</span>, a Full-Stack Developer
                </h1>
                <p className="introduction__content-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="introduction__ctn">
                <img className="introduction__ctn-img" src={profileImg} alt="profile" />
            </div>
            <div>
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
    );
}
