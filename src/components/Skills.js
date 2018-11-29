import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

const CardImg = styled.div`
  width:            100%;
  height:           100px;
  background-size:      75px;
  background-repeat:    no-repeat;
  background-position:  center;
  background-image:     url('http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png');
`
const CardName = styled.div`
  width:            100%;
  height:           30px;
  border:           solid 1px black;
  line-height:      30px;
  text-align:       center;
  font-weight:      600;
`

const cards = [
  { id: 1, name: 'HTML', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { id: 2, name: 'CSS', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { id: 3, name: 'CSS', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { id: 4, name: 'CSS', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { id: 5, name: 'HTML', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { id: 6, name: 'CSS', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { id: 7, name: 'CSS', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { id: 8, name: 'CSS', img: 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' }
]

class Skills extends Component {

  render() {
    return(
    <>
      {cards.map( card => (
        <div className='content-20 cardbox' key={card.id}>
          <CardImg />
          <CardName>
            {card.name}
          </CardName>
        </div>
        ))
      }
    </>
    )
  }
}

export default Skills;