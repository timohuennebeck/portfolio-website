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
                        Fuse's enterprise collaboration platform aims to help remote workers find a
                        balance in their life through a sense of community and collaboration both on
                        and off the clock - allowing them to build deeper relationships with one
                        other.
                    </p>
                </div>
                <div className="fuse__ctn-featured">
                    {/* <FeatureElement name="Days Left Until Alpha Version" number="8" element="+" /> */}
                </div>
                <div className="fuse__ctn-buttons">
                    <div>
                        <ButtonElement
                            name="LIVE DEMO"
                            href="https://fuse-remote-collaboration.herokuapp.com/"
                            backgroundColor="#FFF"
                            fontColor="#000"
                        />
                    </div>
                    <div>
                        <ButtonElement
                            name="GITHUB"
                            href="https://github.com/timohuennebeck/fuse-remote-collaboration"
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
                    href="https://fuse-remote-collaboration.herokuapp.com/"
                    backgroundColor="#FFF"
                    fontColor="#000"
                />
                <div className="fuse__buttons-github">
                    <ButtonElement name="GITHUB" href="https://github.com/timohuennebeck/fuse-remote-collaboration" />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/VcHAeAbxy9oBoIYdIIOwVm/Alia-Internal-Social-Media?node-id=0%3A1&t=IKdbWntJnie2hYXF-0"
                    />
                </div>
            </div>
            <div className="fuse__tech-stack">
                <h4>Tech Stack</h4>
                <p>Frontend:</p>
                <p>JavaScript (TS and React.js), HTML, CSS (SASS), Redux</p>
                <p>Backend:</p>
                <p>Node.js, Express.js, MYSQL (Knex.js), Heroku</p>
            </div>
        </div>
    );
}
