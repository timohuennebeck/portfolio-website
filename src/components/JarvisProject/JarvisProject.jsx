import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import img from "../../assets/images/microsoft-certificate.jpg";
import "./JarvisProject.scss";

export default function JarvisProject() {
    return (
        <div className="indv-project">
            <div className="indv-project__content">
                <h1>Jarvis</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="indv-project__featured">
                <FeatureElement name="Year of Experience" number="7" element="+" />
                <FeatureElement name="Year of Experience" number="7" element="+" />
            </div>
            <div className="indv-project__images">
                <ImageFrame img={img} />
                <ImageFrame img={img} />
                <ImageFrame img={img} />
            </div>
            <div className="indv-project__buttons">
                <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
                <div className="indv-project__buttons-github">
                    <ButtonElement name="GITHUB" />
                    <ButtonElement name="FIGMA" />
                </div>
            </div>
        </div>
    );
}
