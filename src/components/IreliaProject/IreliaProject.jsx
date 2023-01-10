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
                        Finding a job can be time-consuming and stressful! Irelia aims to solve this
                        problem - allowing users to track the status of their job application and
                        create personalised cover letters all while saving 5 - 10min. per
                        application.
                    </p>
                    <p>It's time to put an end to the stress of searching for jobs!</p>
                </div>
                <div className="irelia__ctn-featured">
                    <FeatureElement
                        name="Days Left Until Alpha Version"
                        number="14"
                        element="+"
                    />
                </div>
                <div className="irelia__ctn-buttons">
                    <div>
                        <ButtonElement
                            name="LIVE DEMO"
                            href="https://jarvis-capstone.herokuapp.com"
                            backgroundColor="#FFF"
                            fontColor="#000"
                        />
                    </div>
                    <div>
                        <ButtonElement
                            name="GITHUB"
                            href="https://github.com/timohuennebeck/jarvis-cap"
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
                    href="https://jarvis-capstone.herokuapp.com"
                    backgroundColor="#FFF"
                    fontColor="#000"
                />
                <div className="irelia__buttons-github">
                    <ButtonElement
                        name="GITHUB"
                        href="https://github.com/timohuennebeck/jarvis-cap"
                    />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/mRpcdBRlbhf98OkEfWMFLu/Jarvis-Cover-Letter-Automation?node-id=0%3A1&t=e89wXq3hOm90pS9C-0"
                    />
                </div>
            </div>
            <div className="irelia__tech-stack">
                <h4>Tech Stack</h4>
                <p>
                    Irelia is another full-stack react app which uses SASS on the front-end allowing
                    me to create this mobile-responsive application in just one week without having
                    to sacrifice performance.
                </p>
                <p>
                    For the back-end I decided to use a combination of Node.js and Express.js to
                    create a REST API allowing me to receive data on the front-end using axios
                    calls, as well as, connect a relational database to it using Knex.js which is
                    responsible for handling the users data, leads and companies withe their
                    corresponding statuses. For user verficiation and authorization oauth was used
                    to prohibt unwanted user access.
                </p>
                <p>
                    P.S. This project will experience code refactoring until the 31st of December.
                    Including exchanging existing SASS files with inline HTML inline Tailwind code
                    and switching out some JS code for TS one to make the platform more robust for
                    scaling.
                </p>
            </div>
        </div>
    );
}
