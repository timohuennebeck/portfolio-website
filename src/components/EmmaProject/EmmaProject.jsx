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
                        Emma is an language learning app that utilizes artificial intelligence and
                        text-to-speech to create a fully immersive language learning experience.
                    </p>
                    <p>
                        With Emma, users can engage in real-life conversations with an AI, allowing
                        them to practice their language skills in a natural and authentic way.
                        Whether you're just starting out with a new language or looking to improve
                        your fluency, Emma is the perfect tool to help you reach your goals. Plus,
                        with a wide range of interactive exercises and games, Emma is not only
                        effective but also fun and engaging.
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
                <p>
                    Emma is a modern web application built using the React JavaScript library and
                    written in TypeScript, a typed superset of JavaScript. The app utilizes a MySQL
                    database to store and manage user data, which is hosted on Amazon Web Services
                    (AWS). AWS is a cloud computing platform that provides a range of services,
                    including computing, storage, and database management, allowing Emma to scale
                    and handle a large number of users with ease.
                </p>
                <p>
                    The combination of React, TypeScript, and AWS allows UpCourt to provide a fast,
                    reliable, and secure platform for tennis students and teachers to connect and
                    coordinate lessons.
                </p>
            </div>
        </div>
    );
}
