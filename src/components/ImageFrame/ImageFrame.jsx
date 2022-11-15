import "./ImageFrame.scss";

export default function ImageFrame({ img }) {
    return (
        <div className="image-frame">
            <div className="image-frame__border">
                <img className="image-frame__border-img" src={img} alt="" />
            </div>
        </div>
    );
}
