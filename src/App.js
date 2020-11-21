import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Video from "./media/videos/preview.mp4";
import Logo from "./logo.svg";
import CameraIcon from "./camera-icon-white.svg";
import LaptopIcon from "./laptop-icon-white.svg";
import VideoIcon from "./video-icon-white.svg";
import IntroLogo from "./intro-logo.svg";
import ContentPreviewContainer from './ContentPreviewContainer.js';

function App() {
  return (
    <div>
      <header className="glass-effect">
        <img className="logo" src={Logo}></img>
        <NavBar/>
      </header>
      <div className="wrapper">
        <img src={Logo} className="home-page-logo"/>
        <h1 className="aa-text">ABNORMAL ANGLES</h1>
        <p>
          Abnormal Angles is a content creation agency that specializes
          in photography and videography.
        </p>
        <br/>
        <br/>
        <div id="questionaire-container">
          <h2>What kind of services are you looking for?</h2>
          <ul className="questionaire-questions">
            <li className="questionaire-answer" id="questionaire-step1-photos">
              <img src={CameraIcon} className="questionaire-icon" alt=""/>
              <p>Photos</p>
            </li>
            <li className="questionaire-answer" id="questionaire-step1-videos">
              <img src={VideoIcon} className="questionaire-icon" alt=""/>
              <p>Video</p>
            </li>
            <li className="questionaire-answer" id="questionaire-step1-content">
              <img src={LaptopIcon} className="questionaire-icon" alt=""/>
              <p>Content</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="dim-overlay"/>
      <video autoPlay loop muted src={Video} type="video/mp4" id="main-page-reel"/>
      <ContentPreviewContainer/>
    </div>
  );
}

export default App;
