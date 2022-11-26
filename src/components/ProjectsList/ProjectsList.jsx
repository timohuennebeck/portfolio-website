import "./ProjectsList.scss";

import AliaProject from "../AliaProject/AliaProject";
import JarvisProject from "../JarvisProject/JarvisProject";
import InStockProject from "../InStockProject/InStockProject";

export default function ProjectsList() {
    return (
        <div className="projects-list">
            <AliaProject />
            <JarvisProject />
            <InStockProject />
        </div>
    );
}
