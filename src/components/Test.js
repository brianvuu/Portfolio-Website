import React, { Component } from 'react';

const AllCards = [
  {
    fName: 'Brian',
    lName: 'Vuu'
  }
]

class Test extends Component {
  render() {
    return (

      <div>
        {this.props.fName}
      </div>
    );
  }
}

export default Test;