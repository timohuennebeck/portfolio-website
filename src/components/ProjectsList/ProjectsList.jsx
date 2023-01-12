import "./ProjectsList.scss";

import IreliaProject from "../IreliaProject/IreliaProject";
import FuseProject from "../FuseProject/FuseProject";
import UpCourtProject from "../UpCourtProject/UpCourtProject";
import InStockProject from "../InStockProject/InStockProject";
import EmmaProject from "../EmmaProject/EmmaProject";

export default function ProjectsList() {
    return (
        <div className="projects-list">
            <IreliaProject />
            <FuseProject />
            <EmmaProject />
        </div>
    );
}
