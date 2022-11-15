import "./ProjectsList.scss";

import AliaProject from "../AliaProject/AliaProject";
import JarvisProject from "../JarvisProject/JarvisProject";
import PortfolioWebsiteProject from "../PortfolioWebsiteProject/PortfolioWebsiteProject";

export default function ProjectsList() {
    return (
        <div className="projects-list">
            <AliaProject />
            <AliaProject />
            <AliaProject />
        </div>
    );
}
