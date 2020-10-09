import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Video from "./preview.mp4";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <video autoPlay loop src={Video}type="video/mp4"/>
    </div>
  );
}

export default App;
