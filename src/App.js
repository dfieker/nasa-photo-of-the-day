import React from "react";
import "./App.css";
import APOD from "./Components/NASA/APOD";
import BackgroundPic from "./Components/MyStuff/BackgroundPic";

function App() {
  return (
    <div className="App">
      <APOD />
      <BackgroundPic />
      {/* <BibleVerse />
      <MyThoughts />  */}
    </div>
  );
}

export default App;
