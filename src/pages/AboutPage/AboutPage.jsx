import "./AboutPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import microsoftImg from "../../assets/images/microsoft-certificate.jpg";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";
import resumePDF from "../../assets/documents/Timo-Huennebeck-Full-Stack-Developer-Resume.pdf";

export default function AboutPage() {
    return (
        <>
            <div className="about" id="about">
                <div className="about__ctn">
                    <div className="about__ctn-left">
                        <div className="about__ctn-left-content">
                            <h1 className="about__ctn-left-content-header">About</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="about__ctn-left-featured">
                            <FeatureElement number="1" element="+" name="Years of Experience" />
                            <FeatureElement number="7" element="+" name="Successful Projects" />
                        </div>
                        <div className="about__ctn-left-btn">
                            <div>
                                <a className="about__ctn-left-btn-cv" href={resumePDF} download>
                                    DOWNLOAD CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="about__ctn-right">
                        <ImageFrame img={microsoftImg} />
                        <div className="about__ctn-right-btn">
                            <a className="about__ctn-right-btn-cv" href={resumePDF} download>
                                DOWNLOAD CV
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about__learn-more">
                    <LearnMoreField
                        name="ABOUT ME"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <LearnMoreField
                        name="ABOUT ME"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </>
    );
}
