import "./ProjectsPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import microsoftImg from "../../assets/images/microsoft-certificate.jpg";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import ProjectList from "../../components/ProjectsList/ProjectsList";

export default function ProjectsPage() {
    return (
        <>
            <div className="projects" id="projects">
                <div className="projects__ctn">
                    <div className="projects__ctn-left">
                        <div className="projects__ctn-left-content">
                            <h1 className="projects__ctn-left-content-header">Projects</h1>
                            <p>
                                In this section, you can find a couple of projects that I've
                                accumulated over the past couple of months. These include a personal
                                website (which you are on right now), as well as a cover letter
                                automation tool and internal social media application. If you'd like
                                to get access to the bootcamp projects as well, please reach out to
                                me.
                            </p>
                        </div>
                        <div className="projects__ctn-left-featured">
                            <FeatureElement number="0.5" element="+" name="Years of Experience" />
                            <FeatureElement number="8" element="+" name="Successful Projects" />
                        </div>
                    </div>
                    <div className="projects__ctn-right">
                        <ImageFrame img={microsoftImg} />
                    </div>
                </div>
                <ProjectList />
            </div>
        </>
    );
}
