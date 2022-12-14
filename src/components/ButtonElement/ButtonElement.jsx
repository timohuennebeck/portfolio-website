import "./ButtonElement.scss";

export default function ButtonElement({ href, name, backgroundColor, fontColor }) {
    return (
        <div
            className="button"
            style={{
                backgroundColor: `${backgroundColor}`,
            }}
        >
            <a
                className="button__link"
                href={href}
                target="_blank"
                style={{ color: `${fontColor}` }}
            >
                {name}
            </a>
        </div>
    );
}
