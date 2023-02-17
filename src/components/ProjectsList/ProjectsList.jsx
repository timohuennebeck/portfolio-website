import "./ProjectsList.scss";

import IreliaProject from "../IreliaProject/IreliaProject";
import FuseProject from "../FuseProject/FuseProject";
import EmmaProject from "../EmmaProject/EmmaProject";
import SpellwiseProject from "../SpellwiseProject/SpellwiseProject";

export default function ProjectsList() {
    return (
        <div className="projects-list">
            <EmmaProject />
            <SpellwiseProject />
            <IreliaProject />
            <FuseProject />
        </div>
    );
}
