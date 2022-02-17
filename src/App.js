import React, { useState, useEffect } from "react";
import axios from 'axios'

import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

export default function App() {
  const [data, setData] = useState()
  // const [currentPhoto, setCurrentPhoto] = useState()

  // const openDetails = id => {
  //   setCurrentPhoto()
  // }

  // const closeDetails = () => {
  //   setCurrentPhoto(null)
  // }

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      // console.log(res)
      setData(res.data)
    })
    .catch(err => console.error(err))
  }, [])
  
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

// export default App;
