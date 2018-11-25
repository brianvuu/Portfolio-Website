import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

const CardsContainer = styled.div`
  width:            100%;
  height:           auto;
  display:          flex;
  flex-direction:   row;
  flex-wrap:        wrap;
`
const CardsImg = styled.div`
  width:            100%;
  height:           100px;
  background-size:      75px;
  background-repeat:    no-repeat;
  background-position:  center;
  background-image:     url('http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png');
`
const CardsText = styled.div`
  width:            100%;
  height:           30px;
  border:           solid 1px black;
  line-height:      30px;
  text-align:       center;
  font-weight:      600;
`

const cards = [
  {
    name: 'HTML',
    img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png'
  },
  {
    name: 'CSS',
    img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png'
  }
]

class SkillCard extends Component {


  render() {
    return (
      <CardsContainer>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            {this.state.name}
          </CardsText>
        </div>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            Testing
          </CardsText>
        </div>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            Testing
          </CardsText>
        </div>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            Testing
          </CardsText>
        </div>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            Testing
          </CardsText>
        </div>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            Testing
          </CardsText>
        </div>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            Testing
          </CardsText>
        </div>
        <div className="content-20 cards">
          <CardsImg>
          </CardsImg>
          <CardsText>
            Testing
          </CardsText>
        </div>
      </CardsContainer>
    );
  }
}

export default SkillCard;