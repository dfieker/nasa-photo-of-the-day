import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [data] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod"
      )
      .then(response => {
        console.log(response.data);

      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
