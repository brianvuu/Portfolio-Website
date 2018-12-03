import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon, Modal } from 'semantic-ui-react'

// Temporary for testing ////////////
import html from '../images/html.jpg'
/////////////////////////////////////

class ResumeModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button.Group basic>
          <Link to="/resume" target="_blank">
            <Button>
            {/* <Button onClick={this.show('mini')}> */}
              <Icon name='linkify' /> See My Resume
            </Button>
          </Link>
          <Button onClick={this.show('mini')}>
            <Icon name='cloud download' /> Download
          </Button>
        </Button.Group>
    
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Confirm Download</Modal.Header>
          <Modal.Content>
            <p>download <strong>johndoeresume.pdf</strong> {'(482kb)'}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button content='Cancel' />
            <a href={html} download>
              <Button icon='cloud download' content='Download' />
            </a>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ResumeModal;