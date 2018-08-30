import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { push } from 'connected-react-router'

export class AddSemesterButton extends Component {
  render () {
    const { push } = this.props

    return (
      <Icon
        reverse
        name='add'
        onPress={() => push('/newSemester')}
        containerStyle={{ position: 'absolute', bottom: 10, right: 10 }}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSemesterButton)
