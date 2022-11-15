import "./AboutPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import microsoftImg from "../../assets/images/microsoft-certificate.jpg";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";

export default function AboutPage() {
    return (
        <>
            <div className="about">
                <div className="about__ctn">
                    <div className="about__ctn-content">
                        <h1>About</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>
                    <div className="about__ctn-featured">
                        <FeatureElement number="1" element="+" name="Years of Experience" />
                        <FeatureElement number="7" element="+" name="Successful Projects" />
                    </div>
                    <div className="about__ctn-btn">
                        <div>
                            <ButtonElement name="DOWNLOAD CV" />
                        </div>
                    </div>
                </div>
                <div className="about__img">
                    <ImageFrame img={microsoftImg} />
                    <div className="about__img-btn">
                        <ButtonElement name="DOWNLOAD CV" />
                    </div>
                </div>
            </div>
            <LearnMoreField
                name="ABOUT ME"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <LearnMoreField
                name="ABOUT ME"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </>
    );
}
