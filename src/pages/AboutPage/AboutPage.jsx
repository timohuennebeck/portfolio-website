import "./AboutPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import microsoftImg from "../../assets/images/microsoft-certificate.jpg";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";
import resumePDF from "../../assets/documents/Timo-Huennebeck-Front-End-Developer-Resume.pdf";
import brainstationImg from "../../assets/images/brainstation.jpg"

export default function AboutPage() {
    return (
        <>
            <div className="about" id="about">
                <div className="about__ctn">
                    <div className="about__ctn-left">
                        <div className="about__ctn-left-content">
                            <h1 className="about__ctn-left-content-header">About</h1>
                            <p>
                                I'm a German Front End Developer who'll be moving to Melbourne,
                                Australia in Jan. 2023! When I'm not working (and not practicing
                                tennis, of course!) I like to go surfing, jump through the clouds
                                (skydiving) or put my Spanish to practice. Hola, qué tal?!
                            </p>
                        </div>
                        <div className="about__ctn-left-featured">
                            <FeatureElement number="0.5" element="+" name="Years of Experience" />
                            <FeatureElement number="915" element="+" name="Hours Invested Into Web Development" />
                        </div>
                        <div className="about__ctn-left-btn">
                            <div>
                                <a className="about__ctn-left-btn-cv" href={resumePDF} download>
                                    DOWNLOAD RESUME
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="about__ctn-right">
                        <ImageFrame img={brainstationImg} />
                        <div className="about__ctn-right-btn">
                            <a className="about__ctn-right-btn-cv" href={resumePDF} download>
                                DOWNLOAD RESUME
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about__learn-more">
                    <LearnMoreField
                        name="EDUCATION"
                        paragraph="Please go ahead and either download my resume or checkout my LinkedIn to find out more about me. Let's connect!"
                        href="https://www.linkedin.com/in/timo-huennebeck/"
                    />
                    <LearnMoreField
                        name="LANGUAGES"
                        paragraph="I'd call myself intermediate in the following languages: JavaScript [Vanilla, React.js], HTML, CSS [SCSS] as well as Node.js, Express.js, Web APIs, User Authentication, OAuth, MySQL. I also have some beginner knowledge in TypeScript and Next.js, which I just started teaching myself."
                        href="https://www.linkedin.com/in/timo-huennebeck/"
                    />
                </div>
            </div>
        </>
    );
}
