import "./ProjectsPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import microsoftImg from "../../assets/images/microsoft-certificate.jpg";
import ProjectList from "../../components/ProjectsList/ProjectsList";

export default function ProjectsPage() {
    return (
        <>
            <div className="projects" id="projects">
                <div className="projects__ctn">
                    <div className="projects__ctn-left">
                        <div className="projects__ctn-left-content">
                            <h2 className="projects__ctn-left-content-header">Projects</h2>
                            <p>
                                In this section, one can find a well thoughout selection of projects
                                that I've accumulated over the past 15 weeks! This includes a CRM
                                platform that allows users to track the status of their job
                                applications while helping to personalise their resumes and cover
                                letters.
                            </p>
                            <p>
                                Furthermore, an internal social media platform that makes remote
                                work feel like being in the same room, and a stock management
                                software for warehouses and their corresponding inventories.
                            </p>
                        </div>
                        <div className="projects__ctn-left-featured">
                            <FeatureElement number="0.5" element="+" name="Years of Experience" />
                            <FeatureElement number="8" element="+" name="Successful Projects" />
                        </div>
                    </div>
                    <div className="projects__ctn-right">
                        <div className="projects__ctn-right-img">
                            <ImageFrame img={microsoftImg} />
                        </div>
                    </div>
                </div>
                <ProjectList />
            </div>
        </>
    );
}
