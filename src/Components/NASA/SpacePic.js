import React from "react";
import styled from "styled-components";

const BackgroundColor = styled.div`
background: yellow;`;

const SpacePic = props => {
    return (
        <BackgroundColor>
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
        </BackgroundColor>
    )
}

export default SpacePic;