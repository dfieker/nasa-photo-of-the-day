import React from "react";
import "./App.css";
import APOD from "./Components/NASA/APOD";
import BackgroundPic from "./Components/MyStuff/BackgroundPic";
// import SpacePic from "./Components/NASA/SpacePic";


function App() {
  return (
    <div className="App">
      <BackgroundPic />
      <APOD />
      {/* <SpacePic /> */}
      {/* <MyThoughts />  */}
    </div>
  );
}

export default App;
