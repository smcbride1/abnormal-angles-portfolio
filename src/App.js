import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Video from "./media/videos/preview.mp4";
import Logo from "./logo.svg";
import IntroLogo from "./intro-logo.svg";
import ContentPreviewContainer from './ContentPreviewContainer.js';

function App() {
  return (
    <div>
      <header>
        <img className="logo" src={Logo}></img>
        <NavBar/>
      </header>
      <div className="wrapper">
        <h1 className="aa-text">ABNORMAL ANGLES</h1>
        <br/>
        <br/>
        <ul className="landing_page_links">
          <li>
          <a href="/work">📷 PHOTOGRAPHY</a>
          </li>
          <li>
              <a href="/videography">🎥 VIDEOGRAPHY</a>
          </li>
          <li>
              <a href="/content-creation">💻 CONTENT CREATION</a>
          </li>
        </ul>
        <br/>
        <br/>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
      </div>
      <video autoPlay loop muted src={Video} type="video/mp4" id="main-page-reel"/>
      <ContentPreviewContainer/>
    </div>
  );
}

export default App;
