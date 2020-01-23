import React from "react";
import logo from "./img/stars.jpg";

console.log(logo);

function BackgroundPic() {
    return (
        <div className="container">
            <img src={logo} alt="Night sky full of stars." width="1500px"/>


        </div>
    )
}

export default BackgroundPic;