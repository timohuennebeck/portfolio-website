import "./JarvisProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import jarvisImg1 from "../../assets/images/jarvis-1.jpg";
import jarvisImg2 from "../../assets/images/jarvis-2.jpg";
import jarvisImg3 from "../../assets/images/jarvis-3.jpg";

export default function JarvisProject() {
    return (
        <div className="jarvis">
            <div className="jarvis__ctn">
                <div className="jarvis__ctn-content">
                    <h3 className="jarvis__ctn-content-header">Jarvis</h3>
                    <p>
                        Finding a job can be time-consuming and stressful! Jarvis aims to solve this
                        problem - allowing users to track the status of their job application and
                        create personalised cover letters all while saving 5 - 10min. per
                        application.
                    </p>
                    <p>It's time to put an end to the stress of searching for jobs!</p>
                </div>
                <div className="jarvis__ctn-featured">
                    <FeatureElement name="Days Left Until Beta Version" number="10" element="+" />
                    <FeatureElement name="Hours Invested" number="152" element="+" />
                </div>
                <div className="jarvis__ctn-buttons">
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
            <div className="jarvis__images">
                <div className="jarvis__images-left">
                    <ImageFrame img={jarvisImg1} />
                </div>
                <div className="jarvis__images-middle">
                    <ImageFrame img={jarvisImg2} />
                </div>
                <div className="jarvis__images-right">
                    <ImageFrame img={jarvisImg3} />
                </div>
            </div>
            <div className="jarvis__buttons">
                <ButtonElement
                    name="LIVE DEMO"
                    href="https://jarvis-capstone.herokuapp.com"
                    backgroundColor="#FFF"
                    fontColor="#000"
                />
                <div className="jarvis__buttons-github">
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
            <div className="jarvis__tech-stack">
                <h4>Tech Stack</h4>
                <p>
                    Jarvis is another full-stack react app which uses SASS on the front-end allowing
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
