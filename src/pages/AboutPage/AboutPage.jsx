import "./AboutPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";
import resumePDF from "../../assets/documents/Timo-Huennebeck-Front-End-Developer-Resume.pdf";
import brainstationImg from "../../assets/images/brainstation.jpg";
import ButtonElement from "../../components/ButtonElement/ButtonElement";

export default function AboutPage() {
    return (
        <>
            <div className="about" id="about">
                <div className="about__ctn">
                    <div className="about__ctn-left">
                        <div className="about__ctn-left-content">
                            <h2 className="about__ctn-left-content-header">About Me</h2>
                            <p>
                                I'm aware that one of the biggest challenges as a developer is
                                keeping up with changing technologies!
                            </p>
                            <p>
                                While I've acquired working knowledge in React.js, Node.js, Knex.js,
                                etc... in the bootcamp I'm keen to continue using that same grit and
                                diligence to keep on acquiring new frameworks and languages.
                            </p>
                            <p>
                                P.S. When I'm not coding I love practicing tennis which I've
                                developed an (almost) obsession with since I first saw the
                                Australian Open or go surfing (just starting out)! Huge advocate of
                                the tweener and overhead smash right there!
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
                            <a className="about__ctn-left-btn-cv" href={resumePDF} download>
                                DOWNLOAD RESUME
                            </a>
                            <div>
                                <ButtonElement
                                    name="CONTACT ME"
                                    href="mailto:hello@timohuennebeck.com"
                                />
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
                            <div className="about__ctn-right-btn-component">
                                <ButtonElement
                                    name="CONTACT ME"
                                    href="mailto:hello@timohuennebeck.com"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
