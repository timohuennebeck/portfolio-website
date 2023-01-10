import "./FuseProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import fuse1 from "../../assets/images/fuse-1.jpg";
import fuse2 from "../../assets/images/fuse-2.jpg";
import fuse3 from "../../assets/images/fuse-3.jpg";

export default function FuseProject() {
    return (
        <div className="fuse">
            <div className="fuse__ctn">
                <div className="fuse__ctn-content">
                    <h3 className="fuse__ctn-content-header">Fuse</h3>
                    <p>
                        Moving from a traditional to a remote working environment can be
                        frustrating, but it doesn't have to be!
                    </p>
                    <p>
                        Fuse's internal social media platform offers employees an opportunity to
                        find a balance in their life through a sense of community and collaboration
                        both on and off the clock. Find out how we are making remote work feel like
                        being in the same room!
                    </p>
                </div>
                <div className="fuse__ctn-featured">
                    <FeatureElement
                        name="Days Left Until Alpha Version"
                        number="14"
                        element="+"
                    />
                </div>
                <div className="fuse__ctn-buttons">
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
                </div>
            </div>
            <div className="fuse__images">
                <div className="fuse__images-left">
                    <ImageFrame img={fuse1} />
                </div>
                <div className="fuse__images-middle">
                    <ImageFrame img={fuse2} />
                </div>
                <div className="fuse__images-right">
                    <ImageFrame img={fuse3} />
                </div>
            </div>
            <div className="fuse__buttons">
                <ButtonElement
                    name="LIVE DEMO"
                    href="https://alia-internal-social-media.herokuapp.com/"
                    backgroundColor="#FFF"
                    fontColor="#000"
                />
                <div className="fuse__buttons-github">
                    <ButtonElement name="GITHUB" href="https://github.com/timohuennebeck/alia" />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/VcHAeAbxy9oBoIYdIIOwVm/Alia-Internal-Social-Media?node-id=0%3A1&t=IKdbWntJnie2hYXF-0"
                    />
                </div>
            </div>
            <div className="fuse__tech-stack">
                <h4>Tech Stack</h4>
                <p>
                    This full-stack react app uses SASS on the front-end allowing me to develop a
                    minimal viable product faster while ensuring a consistent design throughout. For
                    the backe-end I decided to use Node.js and Express.js to create a REST API
                    allowing me to connect it to the front-end using axios to handle user accounts,
                    comments, hubs data, upcoming meetings / events.
                </p>
                <p>
                    Fuse uses Knex.js to create a relational database which is used to connect users
                    with their corresponding posts, comments and hubs. To implement verification and
                    authorization to prohibit unwanted user access, oauth was used.
                </p>
                <p>
                    P.S. Fuse will experience code refactoring until the 31st of December.
                    Exchanging existing JS code for TS one making it more readable, modular and
                    performant.
                </p>
            </div>
        </div>
    );
}
