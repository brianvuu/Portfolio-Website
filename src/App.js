import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';

const Title = styled.div`
    width: 100%;
    border: solid 1px yellow;
`
const PortfolioImg = styled.div`
    width: 300px;
    height: 200px;
    margin: auto;
    border: solid 1px skyblue;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('https://www.shareicon.net/download/2017/06/21/887406_man_512x512.png');
`
const LargeText = styled.span`
    font-size: 35px;
    font-weight: 1000;
`
const MediumText = styled.span`
    font-size: 18px;
`

class App extends Component {

  render() {
    return (

      <div className="container">

        <div className="intro">
          <div className="flex-container align-center">
            <Title>
              <h1>Intro</h1>
            </Title>
            <div className="content-40">
              <PortfolioImg />
            </div>
            <div className="content-60">
              <LargeText>
                Hello!
              </LargeText>
              <br /><br />
              <MediumText>
                I'm John Doe, a Front-End Web Developer. I transform designs into websites, build layouts that are mobile responsive and optimize websites for search engines.
              </MediumText>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="flex-container">
            <h1>Skills</h1>
            <SkillCard />
          </div>
        </div>

        <div className="resume">
          <div className="flex-container align-bottom">
            <Title>
              <h1>Resume</h1>
            </Title>
            <div className="content-40">
            <PortfolioImg />
            </div>
            <div className="content-60">
              <Button.Group basic>
                <Button>
                  <Icon name='linkify' />
                  See My Resume
                </Button>
                <Button>
                  <Icon name='cloud download' />
                  Download
                </Button>
              </Button.Group>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="flex-container">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="footer">
          <p>your-website.com | Created by John Doe | 2018</p>
        </div>

      </div>

    );
  }
}

export default App;
