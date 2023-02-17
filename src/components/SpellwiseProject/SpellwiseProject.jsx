import "./SpellwiseProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import spellwise1 from "../../assets/images/spellwise-1.jpg";
import spellwise2 from "../../assets/images/spellwise-2.jpg";
import spellwise3 from "../../assets/images/spellwise-3.jpg";

export default function SpellwiseProject() {
    return (
        <div className="spellwise">
            <div className="spellwise__ctn">
                <div className="spellwise__ctn-content">
                    <div className="spellwise__ctn-content-border">
                        <div className="spellwise__ctn-content-border-span"></div>
                        <h3 className="spellwise__ctn-content-border-header">Spellwise</h3>
                    </div>
                    <p>
                        Spellwise, a comprehensive AI grammar assistant that offers a range of
                        features, such as real-time translation in over 10+ languages, grammar
                        correction, and customizable prompts, to elevate your writing and
                        communication skills to the next level.
                    </p>
                </div>
                <div className="spellwise__ctn-featured">
                    {/* <FeatureElement name="Days Left Until Alpha Version" number="35" element="+" /> */}
                </div>
                <div className="spellwise__ctn-buttons">
                    <div>
                        <ButtonElement
                            name="LIVE DEMO"
                            href="https://spellwise-grammar-checker.herokuapp.com/"
                            backgroundColor="#FFF"
                            fontColor="#000"
                        />
                    </div>
                    <div>
                        <ButtonElement
                            name="GITHUB"
                            href="https://github.com/timohuennebeck/spellwise-grammar-checker"
                        />
                    </div>
                    {/* <div>
                        <ButtonElement
                            name="FIGMA"
                            href="https://www.figma.com/file/yp4cBS9cr02B2oX4SiZ9y4/spellwise?node-id=0%3A1&t=2k8cPzE9U5ZQbwFP-1"
                        />
                    </div> */}
                </div>
            </div>
            <div className="spellwise__images">
                <div className="spellwise__images-left">
                    <ImageFrame img={spellwise1} />
                </div>
                <div className="spellwise__images-middle">
                    <ImageFrame img={spellwise2} />
                </div>
                <div className="spellwise__images-right">
                    <ImageFrame img={spellwise3} />
                </div>
            </div>
            <div className="spellwise__buttons">
                <ButtonElement
                    name="LIVE DEMO"
                    href="https://spellwise-grammar-checker.herokuapp.com/"
                    backgroundColor="#FFF"
                    fontColor="#000"
                />
                <div className="spellwise__buttons-github">
                    <ButtonElement
                        name="GITHUB"
                        href="https://github.com/timohuennebeck/spellwise-grammar-checker"
                    />
                    {/* <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/yp4cBS9cr02B2oX4SiZ9y4/spellwise?node-id=0%3A1&t=2k8cPzE9U5ZQbwFP-1"
                    /> */}
                </div>
            </div>
            <div className="spellwise__tech-stack">
                <h4>Tech Stack</h4>
                <p>Frontend:</p>
                <p>JavaScript (TS and React.js), HTML, CSS (SASS)</p>
                <p>Backend:</p>
                <p>Node.js, Express.js, GPT3, Heroku</p>
            </div>
        </div>
    );
}
