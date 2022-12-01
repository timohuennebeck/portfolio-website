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
                        <br />a Front End Developer
                    </h1>
                    <p className="introduction__sub-content-paragraph">
                        I'm a German Front End Developer who was born and raised in Cologne, GER -
                        living in Melbourne, AUS!
                    </p>
                    <p className="introduction__sub-content-paragraph">
                        I'm also an automation enthusiast and attempt to automate whatever possible.
                        Whether it be using Google Home to turn on the lights the moment I get home,
                        or using Zapier to connect Trello and LinkedIn to populate a new card with
                        the users information whenever I get a new LinkedIn message!
                    </p>
                </div>
                <div className="introduction__sub-ctn">
                    <img className="introduction__sub-ctn-img" src={profileImg} alt="profile" />
                </div>
                <div className="introduction__sub-content-learn-more">
                    <LearnMoreField
                        name="MY WORK"
                        paragraph="I have hands-on experience coding websites and applications both with front-end and back-end related languages - including react.js, node.js, express.js, knex.js and more."
                        href="#projects"
                    />
                </div>
            </div>
        </div>
    );
}
