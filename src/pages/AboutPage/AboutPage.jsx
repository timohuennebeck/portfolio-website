import "./AboutPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import microsoftImg from "../../assets/images/microsoft-certificate.jpg";
import LearnMoreField from "../../components/LearnMoreField/LearnMoreField";

export default function AboutPage() {
    return (
        <div className="about">
            <div className="about__content">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="about__featured">
                <FeatureElement number="1" element="+" name="Years of Experience" />
                <FeatureElement number="7" element="+" name="Successful Projects" />
            </div>
            <ImageFrame img={microsoftImg} />
            <ButtonElement name="DOWNLOAD CV" />
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
    );
}
