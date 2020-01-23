import React, {useState, useEffect} from "react";
import axios from "axios";
import SpacePic from "./SpacePic";
import BibleVerse from "../MyStuff/BibleVerse";
// import PictureData from "./PictureData";

function APOD() {
    const [data, setData] = useState([]);
    console.log(data);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      )
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  }, []);
  return (
      <div>
          {/* <BibleVerse /> */}
          <SpacePic 
                date={data.date}
                title={data.title}
                image={data.url}
                explanation={data.explanation}
            />
        </div>
  );
}

export default APOD;