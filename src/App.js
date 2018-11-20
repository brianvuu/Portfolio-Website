import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="intro">
          <h1>Intro</h1>
        </div>
        <div className="skills">
          <h1>Skills</h1>
        </div>
        <div className="resume">
          <h1>Resume</h1>
        </div>
        <div className="footer">
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
}

export default App;
