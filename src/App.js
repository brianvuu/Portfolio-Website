import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';

const Intro = styled.div`
  background-color: rgb(29,30,36);
  width:            100%;
  height:           500px;
`

class App extends Component {
  render() {
    return (
      <div className="container">
        <Intro>
          <h1>Testing</h1>
        </Intro>
      </div>
    );
  }
}

export default App;
