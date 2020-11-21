import React from 'react';
import './Construction.css';
import Logo from "./logo.svg";

function Construction() {
  return (
    <div>
      <div className="wrapper">
        <img src={Logo} className="home-page-logo"/>
        <h1 className="aa-text">ABNORMAL ANGLES</h1>
        <p>
          Please excuse our appearance while we get ready to deploy our new website.
        </p>
      </div>
    </div>
  );
}

export default Construction;
