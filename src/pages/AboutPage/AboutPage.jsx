import "./AboutPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";
import resumePDF from "../../assets/documents/Timo-Huennebeck-Front-End-Developer-Resume.pdf";
import brainstationImg from "../../assets/images/brainstation.jpg";

export default function AboutPage() {
    return (
        <>
            <div className="about" id="about">
                <div className="about__ctn">
                    <div className="about__ctn-left">
                        <div className="about__ctn-left-content">
                            <h1 className="about__ctn-left-content-header">About</h1>
                            <p>
                                I'm a German Front End Developer who was borned and raised in
                                Cologne, GER - living in Melbourne, AUS!
                            </p>
                            <p>
                                P.S. When I'm not coding I love to practice tennis which I've
                                developed an (almost) obsession with since I first saw the
                                Australian Open in 2020. Huge advocate of the tweener and overhead
                                smash right here!
                            </p>
                        </div>
                        <div className="about__ctn-left-featured">
                            <FeatureElement number="0.5" element="+" name="Years of Experience" />
                            <FeatureElement
                                number="915"
                                element="+"
                                name="Hours Invested Into Web Development"
                            />
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
                        <div className="about__ctn-right-img">
                            <ImageFrame img={brainstationImg} />
                        </div>
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
                        paragraph="I am not just another Front End Developer because..."
                        paragraphTwo="I believe that coming from a coding bootcamp as opposed to a traditional CS degree gives me an edge over the traditional path as it allows me to leverage previous experiences and knowledge from different sectors to see challenges from a unique perspective."
                        href="https://www.linkedin.com/in/timo-huennebeck/"
                    />
                    <LearnMoreField
                        name="LANGUAGES"
                        paragraph="I know that one of the biggest challenges as a developer is keeping up with changing technologies!"
                        paragraphTwo="While I've acquired working knowledge in React.js, Node.js, Knex.js, etc... in the bootcamp I'm keen to continue using that same grit and diligence to keep on acquiring new frameworks and languages."
                        href="https://www.linkedin.com/in/timo-huennebeck/"
                    />
                </div>
            </div>
        </>
    );
}
