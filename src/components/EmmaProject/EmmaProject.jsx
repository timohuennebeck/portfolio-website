import "./EmmaProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import emma1 from "../../assets/images/emma-1.jpg";
import emma2 from "../../assets/images/emma-2.jpg";
import emma3 from "../../assets/images/emma-3.jpg";

export default function EmmaProject() {
    return (
        <div className="emma">
            <div className="emma__ctn">
                <div className="emma__ctn-content">
                    <div className="emma__ctn-content-border">
                        <div className="emma__ctn-content-border-span"></div>
                        <h3 className="emma__ctn-content-border-header">Emma - In Development</h3>
                    </div>
                    <p>
                        I'm co-developing Emma, an AI-powered language learning platform that
                        utilises AI to simulate real-life conversation with native speakers to
                        empower individuals in less developed, financially disadvantaged countries
                        to acquire foreign language for free.
                    </p>
                </div>
                <div className="emma__ctn-featured">
                    <FeatureElement name="Days Left Until Alpha Version" number="57" element="+" />
                </div>
                <div className="upcourt__ctn-buttons">
                    {/* <div>
                        <ButtonElement
                            name="LIVE DEMO"
                            href="https://alia-internal-social-media.herokuapp.com/"
                            backgroundColor="#FFF"
                            fontColor="#000"
                        />
                    </div>
                    <div>
                        <ButtonElement
                            name="GITHUB"
                            href="https://github.com/timohuennebeck/alia"
                        />
                    </div> */}
                    <div>
                        <ButtonElement
                            name="FIGMA"
                            href="https://www.figma.com/file/yp4cBS9cr02B2oX4SiZ9y4/Emma?node-id=0%3A1&t=2k8cPzE9U5ZQbwFP-1"
                        />
                    </div>
                </div>
            </div>
            <div className="emma__images">
                <div className="emma__images-left">
                    <ImageFrame img={emma1} />
                </div>
                <div className="emma__images-middle">
                    <ImageFrame img={emma2} />
                </div>
                <div className="emma__images-right">
                    <ImageFrame img={emma3} />
                </div>
            </div>
            <div className="upcourt__buttons">
                {/* <ButtonElement
                    name="LIVE DEMO"
                    href="https://upcourt-internal-social-media.herokuapp.com/"
                    backgroundColor="#FFF"
                    fontColor="#000"
                /> */}
                <div className="upcourt__buttons-github">
                    {/* <ButtonElement name="GITHUB" href="https://github.com/timohuennebeck/upcourt" /> */}
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/yp4cBS9cr02B2oX4SiZ9y4/Emma?node-id=0%3A1&t=2k8cPzE9U5ZQbwFP-1"
                    />
                </div>
            </div>
            <div className="emma__tech-stack">
                <h4>Tech Stack</h4>
                <p>Frontend:</p>
                <p>JavaScript (TS and React.js), HTML, CSS (SASS), Redux</p>
                <p>Backend:</p>
                <p>Node.js, Express.js, MYSQL (Knex.js), Heroku</p>
            </div>
        </div>
    );
}
