import "./AboutPage.scss";

import ImageFrame from "../../components/ImageFrame/ImageFrame";
import cvPDF from "../../assets/documents/CV-Timo-Huennebeck-Frontend-Developer.pdf";
import brainstationImg from "../../assets/images/brainstation.jpg";
import ButtonElement from "../../components/ButtonElement/ButtonElement";

export default function AboutPage() {
    return (
        <>
            <div className="about" id="about">
                <div className="about__ctn">
                    <div className="about__ctn-left">
                        <div className="about__ctn-left-content">
                            <h2 className="about__ctn-left-content-header">About Me</h2>
                            <p>
                                P.S. When I'm not coding, I love to practice tennis which I've
                                developed an obsession with since I first saw the Australian Open in
                                2020 or go surfing, tho it's kind of hard over here.
                            </p>
                            <p>
                                I almost forgot, I'm a passionate linguist! I'm fluent in German and
                                English (C1), attained an intermediate level in Spanish (B2), and am
                                now delving into the French (A2) language with plans to further
                                expand this linguistic repertoire with Portuguese within the next 24
                                - 36 months.
                            </p>
                        </div>
                        <div className="about__ctn-left-btn">
                            <a className="about__ctn-left-btn-cv" href={cvPDF} download>
                                DOWNLOAD CV
                            </a>
                            <div>
                                <ButtonElement
                                    name="CONTACT ME"
                                    href="mailto:hello@timohuennebeck.com"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="about__ctn-right">
                        <div className="about__ctn-right-img">
                            <ImageFrame img={brainstationImg} />
                        </div>
                        <div className="about__ctn-right-btn">
                            <a className="about__ctn-right-btn-cv" href={cvPDF} download>
                                DOWNLOAD CV
                            </a>
                            <div className="about__ctn-right-btn-component">
                                <ButtonElement
                                    name="CONTACT ME"
                                    href="mailto:hello@timohuennebeck.com"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
