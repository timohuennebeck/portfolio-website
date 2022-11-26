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
                        <br /> Front End Developer
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
                        paragraph="I am a passionate Front End Developer who loves solving problems and create innovative solutions who's always looking for new challenges and thrive in environments where I can learn new things."
                        href="#about"
                    />
                    <LearnMoreField
                        name="MY WORK"
                        paragraph="When I'm working on a project I need to find its purpose of it. Whether it be solving an existing problem in the market, helping out communities or else. Don't be shy and have a look at my work from the past couple of months!"
                        href="#projects"
                    />
                </div>
            </div>
        </div>
    );
}
