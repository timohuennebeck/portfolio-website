import "./AliaProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import img from "../../assets/images/microsoft-certificate.jpg";
import alia1 from "../../assets/images/alia-1.jpg";
import alia2 from "../../assets/images/alia-2.jpg";
import alia3 from "../../assets/images/alia-3.jpg";

export default function AliaProject() {
    return (
        <div className="alia">
            <div className="alia__ctn">
                <div className="alia__ctn-content">
                    <h1 className="alia__ctn-content-header">Alia</h1>
                    <p>
                        Moving from a traditional to a remote working environment can be
                        frustrating, but it doesn't have to be!
                    </p>
                    <p>
                        Alia's internal social media platform offers employees an opportunity to
                        find a balance in their life through a sense of community and collaboration
                        both on and off the clock. Find out how we are making remote work feel like
                        being in the same room!
                    </p>
                </div>
                <div className="alia__ctn-featured">
                    <FeatureElement name="Days Left Until Alpha Version" number="25" element="+" />
                    <FeatureElement name="Hours Invested" number="18" element="+" />
                </div>
                <div className="alia__ctn-buttons">
                    <div>
                        <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
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
            <div className="alia__images">
                <div className="alia__images-left">
                    <ImageFrame img={alia1} />
                </div>
                <div className="alia__images-middle">
                    <ImageFrame img={alia2} />
                </div>
                <div className="alia__images-right">
                    <ImageFrame img={alia3} />
                </div>
            </div>
            <div className="alia__buttons">
                <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
                <div className="alia__buttons-github">
                    <ButtonElement name="GITHUB" href="https://github.com/timohuennebeck/alia" />
                    <ButtonElement
                        name="FIGMA"
                        href="https://www.figma.com/file/VcHAeAbxy9oBoIYdIIOwVm/Alia-Internal-Social-Media?node-id=0%3A1&t=IKdbWntJnie2hYXF-0"
                    />
                </div>
            </div>
        </div>
    );
}
