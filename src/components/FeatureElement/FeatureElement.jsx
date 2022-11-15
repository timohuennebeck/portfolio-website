import "./FeatureElement.scss";

export default function FeatureElement({number, element, name}) {
    return (
        <div className="feature">
            <div className="feature__amount">
                <h1 className="feature__amount-number">{number}</h1>
                <h1 className="feature__amount-element">{element}</h1>
            </div>
            <h3 className="feature__name">{name}</h3>
        </div>
    );
}
