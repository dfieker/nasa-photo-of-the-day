import React from "react";

const SpacePic = props => {
    return (
        <div className="picture-info">
            <p>
                Date: {props.date}
            </p>
            <h2 className="picture-title">
                {props.title}
            </h2>
            <img className="image"
            src={props.image}
            alt="Picture of the Day."
            />
            <p>
                {props.explanation}
            </p>
        </div>
    )
}

export default SpacePic;