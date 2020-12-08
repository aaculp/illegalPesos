import React, { useState, useEffect } from 'react';
import MusicSlider from './components/MusicSlider'
import "./css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="App">
      <div className="AppHeader">
        <span>
          <u>DJ MARCO PE$OS</u>
        </span>
        {/* <span>Latest Mixes</span> */}
      </div>
      <MusicSlider />
    </div>
  );
}

export default App;
