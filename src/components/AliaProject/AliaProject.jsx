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
                        Alia, is the long-needed "internal" social media for companies to help
                        employees build deeper relationships in a remote environment that will go
                        beyond just work.
                    </p>
                </div>
                <div className="alia__ctn-featured">
                    <FeatureElement name="Year of Experience" number="7" element="+" />
                    <FeatureElement name="Year of Experience" number="7" element="+" />
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
                <ImageFrame img={alia1} />
                <ImageFrame img={alia2} />
                <ImageFrame img={alia3} />
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
