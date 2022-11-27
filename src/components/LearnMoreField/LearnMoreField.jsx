import "./LearnMoreField.scss";

export default function LearnMoreField({ name, paragraph, paragraphTwo, href }) {
    return (
        <div className="learn-more">
            <p className="learn-more__header">{name}</p>
            <p className="learn-more__paragraph">{paragraph}</p>
            <p className="learn-more__paragraph-2">{paragraphTwo}</p>
            <div className="learn-more__ctn">
                <a className="learn-more__ctn-link" href={href}>
                    LEARN MORE
                </a>
            </div>
        </div>
    );
}
