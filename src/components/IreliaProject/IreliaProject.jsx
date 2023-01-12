import "./IreliaProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import ireliaImg1 from "../../assets/images/irelia-1.jpg";
import ireliaImg2 from "../../assets/images/irelia-2.jpg";
import ireliaImg3 from "../../assets/images/irelia-3.jpg";

export default function IreliaProject() {
    return (
        <div className="irelia">
            <div className="irelia__ctn">
                <div className="irelia__ctn-content">
                    <h3 className="irelia__ctn-content-header">Irelia</h3>
                    <p>
                        Irelia leverages Open AI's artificial intelligence to assist job seekers in
                        tracking their application status, overcoming writers block and crafting
                        personalised cover letters. This platform was presented to 50+ alumni and
                        was offered beta testing opportunities from 8+ different BrainStation
                        graduates.
                    </p>
                </div>
                <div className="irelia__ctn-featured">
                    <FeatureElement name="Days Left Until Alpha Version" number="14" element="+" />
                </div>
                <div className="irelia__ctn-buttons">
                    <div>
                        <ButtonElement
                            name="LIVE DEMO"
                            href="https://irelia-career-management.herokuapp.com"
                            backgroundColor="#FFF"
                            fontColor="#000"
                        />
                    </div>
                    <div>
                        <ButtonElement
                            name="GITHUB"
                            href="https://github.com/timohuennebeck/irelia-career-management"
                        />
                    </div>
                    <div>
                        <ButtonElement
                            name="FIGMA"
                            href="https://www.figma.com/file/mRpcdBRlbhf98OkEfWMFLu/Jarvis-Cover-Letter-Automation?node-id=0%3A1&t=e89wXq3hOm90pS9C-0"
                        />
                    </div>
                </div>
            </div>
            <div className="irelia__images">
                <div className="irelia__images-left">
                    <ImageFrame img={ireliaImg1} />
                </div>
                <div className="irelia__images-middle">
                    <ImageFrame img={ireliaImg2} />
                </div>
                <div className="irelia__images-right">
                    <ImageFrame img={ireliaImg3} />
                </div>
            </div>
            <div className="irelia__buttons">
                <ButtonElement
                    name="LIVE DEMO"
                    href="https://irelia-career-management.herokuapp.com"
                    backgroundColor="#FFF"
                    fontColor="#000"
                />
                <div className="irelia__buttons-github">
                    <ButtonElement
                        name="GITHUB"
                        href="https://github.com/timohuennebeck/irelia-career-management"
                    />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/mRpcdBRlbhf98OkEfWMFLu/Jarvis-Cover-Letter-Automation?node-id=0%3A1&t=e89wXq3hOm90pS9C-0"
                    />
                </div>
            </div>
            <div className="irelia__tech-stack">
                <h4>Tech Stack</h4>
                <p>Frontend:</p>
                <p>JavaScript (TS and React.js), HTML, CSS (SASS), Redux</p>
                <p>Backend:</p>
                <p>Node.js, Express.js, MYSQL (Knex.js), Heroku</p>
            </div>
        </div>
    );
}
