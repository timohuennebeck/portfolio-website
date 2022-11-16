import "./JarvisProject.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
import FeatureElement from "../FeatureElement/FeatureElement";
import ImageFrame from "../ImageFrame/ImageFrame";
import img from "../../assets/images/microsoft-certificate.jpg";
import jarvisImg1 from "../../assets/images/jarvis-1.jpg"
import jarvisImg2 from "../../assets/images/jarvis-2.jpg"
import jarvisImg3 from "../../assets/images/jarvis-3.jpg"


export default function JarvisProject() {
    return (
        <div className="jarvis">
            <div className="jarvis__ctn">
                <div className="jarvis__ctn-content">
                    <h1 className="jarvis__ctn-content-header">Jarvis</h1>
                    <p>
                        Jarvis is a software that allows one to write personalized cover letters
                        while decreasing the amount of manual work and margin of error, saving 5-
                        10+ mins per cover letter, on average.
                    </p>
                </div>
                <div className="jarvis__ctn-featured">
                    <FeatureElement name="Days Left Until Beta Version" number="5" element="+" />
                    <FeatureElement name="Hours Invested" number="152" element="+" />
                </div>
                <div className="jarvis__ctn-buttons">
                    <div>
                        <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
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
                <ImageFrame img={jarvisImg1} />
                <ImageFrame img={jarvisImg2} />
                <ImageFrame img={jarvisImg3} />
            </div>
            <div className="jarvis__buttons">
                <ButtonElement name="LIVE DEMO" backgroundColor="#FFF" fontColor="#000" />
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
        </div>
    );
}
