import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import img from "../../assets/images/microsoft-certificate.jpg";
import "./PortfolioWebsite.scss";

import portfolioWebsite1 from "../../assets/images/portfolio-website-1.jpg"
import portfolioWebsite2 from "../../assets/images/portfolio-website-2.jpg"
import portfolioWebsite3 from "../../assets/images/portfolio-website-3.jpg"

export default function PortfolioWebsite() {
    return (
        <div className="portfolio-website">
            <div className="portfolio-website__ctn">
                <div className="portfolio-website__ctn-content">
                    <h1 className="portfolio-website__ctn-content-header">Portfolio Website</h1>
                    <p>
                        Personal website with a minimalistic design showcasing the most up-to-date
                        projects with their corresponding demos. You'll be able to find my current and
                        past projects here. For a more in-depth description, please download my CV
                        or visit my LinkedIn.
                    </p>
                </div>
                <div className="portfolio-website__ctn-featured">
                    <FeatureElement name="Year of Experience" number="7" element="+" />
                    <FeatureElement name="Year of Experience" number="7" element="+" />
                </div>
                <div className="portfolio-website__ctn-buttons">
                    <div>
                        <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
                    </div>
                    <div>
                        <ButtonElement
                            name="GITHUB"
                            href="https://github.com/timohuennebeck/portfolio-website"
                        />
                    </div>
                    <div>
                        <ButtonElement
                            name="FIGMA"
                            href="https://www.figma.com/file/oYhwdfRqaOYpqGfCGIlpd4/Personal-Website-Version-2?node-id=3%3A2&t=hmAarOXsMqW2VEFp-0"
                        />
                    </div>
                </div>
            </div>
            <div className="portfolio-website__images">
                <ImageFrame img={portfolioWebsite1} />
                <ImageFrame img={portfolioWebsite2} />
                <ImageFrame img={portfolioWebsite3} />
            </div>
            <div className="portfolio-website__buttons">
                <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
                <div className="portfolio-website__buttons-github">
                    <ButtonElement
                        name="GITHUB"
                        href="https://github.com/timohuennebeck/portfolio-website"
                    />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/oYhwdfRqaOYpqGfCGIlpd4/Personal-Website-Version-2?node-id=3%3A2&t=hmAarOXsMqW2VEFp-0"
                    />
                </div>
            </div>
        </div>
    );
}
