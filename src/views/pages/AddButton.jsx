import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { push } from 'connected-react-router'

export class AddButton extends Component {
  render () {
    const { push, path } = this.props

    return (
      <Icon
        reverse
        name='add'
        onPress={() => push(path)}
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
