import React, {useState, useEffect} from "react";
import axios from "axios";
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
    <div className="picture-info">
            {/* <p>
                Date: {data.date}
            </p>
            <h2 className="picture-title">
                {data.title}
            </h2>
            <img className="image"
            src={data.url}
            alt="Picture of the Day."
            />
            <p>
                {data.explanation}
            </p> */}
        </div>
  );
}

export default APOD;