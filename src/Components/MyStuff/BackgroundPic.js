import React from "react";
import logo from "./img/stars.jpg";
import BibleVerse from "./BibleVerse";



function BackgroundPic() {
    return (
        <div className="container">
            <img src={logo} alt="Night sky full of stars." width="1650px" />
            <div className="verse"><BibleVerse />
            </div>
        

        </div>
    )
}

export default BackgroundPic;