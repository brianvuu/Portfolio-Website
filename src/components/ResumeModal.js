import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class ResumeModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Modal trigger={
          <Button inverted size='medium' color='blue'>
            <Icon name='file' /> See My Resume
          </Button>
        }>
          <Modal.Header>John Doe's Resume</Modal.Header>
          <Modal.Content image scrolling>
            <Image src={require('../files/developerresume.jpg')} wrapped centered/>
          </Modal.Content>
        </Modal>
          <Button inverted size='medium' color='blue' onClick={this.show('mini')}>
            <Icon name='cloud download' /> Download
          </Button>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Confirm Download</Modal.Header>
          <Modal.Content>
            <p className="dark-font">download johndoeresume.pdf {'(482kb)'}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button content='Cancel' onClick={this.close}/>
            <a href={require('../files/developerresume.jpg')} download>
              <Button icon='cloud download' content='Download' onClick={this.close} />
            </a>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ResumeModal;