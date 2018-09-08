import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { push } from 'connected-react-router'

export class AddButton extends Component {
  onClick = () => {
    const { push, path } = this.props
    push(path)
  }

  render () {
    return (
      <Icon
        reverse
        name='add'
        onPress={this.onClick}
        containerStyle={{ position: 'absolute', bottom: 10, right: 10 }}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton)
