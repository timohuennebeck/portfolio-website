import "./LearnMoreField.scss";

export default function LearnMoreField({ name, paragraph, link, href }) {
    return (
        <div className="learn-more">
            <h4 className="learn-more__header">{name}</h4>
            <p className="learn-more__paragraph">{paragraph}</p>
            <div className="learn-more__ctn">
                <a className="learn-more__ctn-link" href={href}>
                    LEARN MORE
                </a>
            </div>
        </div>
    );
}
