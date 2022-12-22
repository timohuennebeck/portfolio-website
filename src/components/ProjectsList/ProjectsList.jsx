import "./ProjectsList.scss";

import JarvisProject from "../JarvisProject/JarvisProject";
import AliaProject from "../AliaProject/AliaProject";
import UpCourtProject from "../UpCourtProject/UpCourtProject";
import InStockProject from "../InStockProject/InStockProject";

export default function ProjectsList() {
    return (
        <div className="projects-list">
            <JarvisProject />
            <AliaProject />
            <UpCourtProject />
            <InStockProject />
        </div>
    );
}
