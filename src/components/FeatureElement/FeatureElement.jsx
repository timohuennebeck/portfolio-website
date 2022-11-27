import "./FeatureElement.scss";

export default function FeatureElement({ number, element, name }) {
    return (
        <div className="feature">
            <div className="feature__amount">
                <p className="feature__amount-number">{number}</p>
                <p className="feature__amount-element">{element}</p>
            </div>
            <p className="feature__name">{name}</p>
        </div>
    );
}
