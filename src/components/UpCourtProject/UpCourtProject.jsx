import "./UpCourtProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import upCourt1 from "../../assets/images/upcourt-1.jpg";
import upCourt2 from "../../assets/images/upcourt-2.jpg";
import upCourt3 from "../../assets/images/upcourt-3.jpg";

export default function UpCourtProject() {
    return (
        <div className="upcourt">
            <div className="upcourt__ctn">
                <div className="upcourt__ctn-content">
                    <div className="upcourt__ctn-content-border">
                        <div className="upcourt__ctn-content-border-span"></div>
                        <h3 className="upcourt__ctn-content-border-header">
                            UpCourt - Coming Soon
                        </h3>
                    </div>
                    <p>
                        UpCourt is a software platform that helps tennis students easily search for
                        and connect with superior tennis teachers in their region.
                    </p>
                    <p>
                        With UpCourt, users can browse profiles of local tennis teachers, read
                        reviews from previous students, and easily book lessons with the teacher of
                        their choice. UpCourt makes it easier for tennis students to find the right
                        teacher for their needs, whether they are looking to improve their skills,
                        prepare for a tournament, or just enjoy the game more.
                    </p>
                </div>
                <div className="upcourt__ctn-featured">
                    <FeatureElement name="Days Left Until Alpha Version" number="57" element="+" />
                </div>
                {/* <div className="upcourt__ctn-buttons">
                    <div>
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
                    </div>
                    <div>
                        <ButtonElement
                            name="FIGMA"
                            href="https://www.figma.com/file/VcHAeAbxy9oBoIYdIIOwVm/Alia-Internal-Social-Media?node-id=0%3A1&t=IKdbWntJnie2hYXF-0"
                        />
                    </div>
                </div> */}
            </div>
            <div className="upcourt__images">
                <div className="upcourt__images-left">
                    <ImageFrame img={upCourt1} />
                </div>
                <div className="upcourt__images-middle">
                    <ImageFrame img={upCourt2} />
                </div>
                <div className="upcourt__images-right">
                    <ImageFrame img={upCourt3} />
                </div>
            </div>
            <div className="upcourt__buttons">
                <ButtonElement
                    name="LIVE DEMO"
                    href="https://upcourt-internal-social-media.herokuapp.com/"
                    backgroundColor="#FFF"
                    fontColor="#000"
                />
                {/* <div className="upcourt__buttons-github">
                    <ButtonElement name="GITHUB" href="https://github.com/timohuennebeck/upcourt" />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/VcHAeAbxy9oBoIYdIIOwVm/upcourt-Internal-Social-Media?node-id=0%3A1&t=IKdbWntJnie2hYXF-0"
                    />
                </div> */}
            </div>
            <div className="upcourt__tech-stack">
                <h4>Tech Stack</h4>
                <p>
                    UpCourt is a modern web application built using the React JavaScript library and
                    written in TypeScript, a typed superset of JavaScript. The app utilizes a MySQL
                    database to store and manage user data, which is hosted on Amazon Web Services
                    (AWS). AWS is a cloud computing platform that provides a range of services,
                    including computing, storage, and database management, allowing UpCourt to scale
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
