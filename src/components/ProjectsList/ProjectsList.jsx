import "./ProjectsList.scss";

import AliaProject from "../AliaProject/AliaProject";
import JarvisProject from "../JarvisProject/JarvisProject";
import PortfolioWebsite from "../PortfolioWebsite/PortfolioWebsite";

export default function ProjectsList() {
    return (
        <div className="projects-list">
            <AliaProject />
            <JarvisProject />
            <PortfolioWebsite />
        </div>
    );
}
