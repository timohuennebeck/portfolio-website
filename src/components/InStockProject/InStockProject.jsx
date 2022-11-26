import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import "./InStockProject.scss";

import inStockImg1 from "../../assets/images/instock-1.jpg";
import inStockImg2 from "../../assets/images/instock-2.jpg";
import inStockImg3 from "../../assets/images/instock-3.jpg";

export default function InStockProject() {
    return (
        <div className="instock">
            <div className="instock__ctn">
                <div className="instock__ctn-content">
                    <h1 className="instock__ctn-content-header">InStock</h1>
                    <p>
                        This was a group work bootcamp project, collaborating using GitFlow and Jira
                        to produce a warehouse platform to manage inventories and warehouses!
                    </p>
                    <p>
                        InStock is a full-stack react app which uses Node.js and Express.js on the
                        backend - handling all the JSON data. InStock taught us the intricacies of
                        these kind of applications and the need of creating reusable components
                        while working as a team - in this case as four web developers with one
                        project manager.
                    </p>
                </div>
                <div className="instock__ctn-featured">
                    <FeatureElement name="Days Left Until Launch" number="0" element="+" />
                    <FeatureElement name="Hours Invested" number="15" element="+" />
                </div>
                <div className="instock__ctn-buttons">
                    <div>
                        <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
                    </div>
                    <div>
                        <ButtonElement
                            name="GITHUB"
                            href="https://github.com/timohuennebeck/instock"
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
            <div className="instock__images">
                <div className="instock__images-left">
                    <ImageFrame img={inStockImg1} />
                </div>
                <div className="instock__images-middle">
                    <ImageFrame img={inStockImg2} />
                </div>
                <div className="instock__images-right">
                    <ImageFrame img={inStockImg3} />
                </div>
            </div>
            <div className="instock__buttons">
                <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
                <div className="instock__buttons-github">
                    <ButtonElement name="GITHUB" href="https://github.com/timohuennebeck/instock" />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/oYhwdfRqaOYpqGfCGIlpd4/Personal-Website-Version-2?node-id=3%3A2&t=hmAarOXsMqW2VEFp-0"
                    />
                </div>
            </div>
        </div>
    );
}
