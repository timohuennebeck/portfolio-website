import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import img from "../../assets/images/microsoft-certificate.jpg";
import "./PortfolioWebsiteProject.scss";

export default function PortfolioWebsiteProject() {
    return (
        <div className="portfolio">
            <div className="portfolio__content">
                <h1>Personal Website</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="portfolio__featured">
                <FeatureElement name="Year of Experience" number="7" element="+" />
                <FeatureElement name="Year of Experience" number="7" element="+" />
            </div>
            <div className="portfolio__images">
                <ImageFrame img={img} />
                <ImageFrame img={img} />
                <ImageFrame img={img} />
            </div>
            <div className="portfolio__buttons">
                <ButtonElement name="GITHUB" />
                <ButtonElement name="FIGMA" />
            </div>
        </div>
    );
}
