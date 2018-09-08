import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { editing as uiEditing } from '../../state/ducks/ui'

export class SubjectForm extends Component {
  onChangeName = text => {
    const { changeProperty } = this.props
    changeProperty('name', text)
  }

  render () {
    const { editing } = this.props

    return (
      <Input
        autoFocus
        placeholder='name'
        value={editing.name || ''}
        onChangeText={this.onChangeName}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  editing: uiEditing.selectors.get(state)
})

const mapDispatchToProps = {
  changeProperty: uiEditing.actions.changeProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectForm)
