import "./ProjectsPage.scss";

import FeatureElement from "../../components/FeatureElement/FeatureElement";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import microsoftImg from "../../assets/images/microsoft-certificate.jpg";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import ProjectList from "../../components/ProjectsList/ProjectsList";

export default function ProjectsPage() {
    return (
        <div className="projects">
            <div className="projects__content">
                <h1>Projects</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="projects__featured">
                <FeatureElement number="1" element="+" name="Years of Experience" />
                <FeatureElement number="7" element="+" name="Successful Projects" />
            </div>
            <ImageFrame img={microsoftImg} />
            <ButtonElement name="DOWNLOAD CV" />
            <ProjectList />
        </div>
    );
}