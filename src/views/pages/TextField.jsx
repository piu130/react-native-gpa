import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { editing as uiEditing } from '../../state/ducks/ui'

export class TextField extends Component {
  onChangeText = text => {
    const { changeProperty, fieldName } = this.props
    changeProperty(fieldName, text)
  }

  render () {
    const { editing, fieldName, placeholder, changeProperty, ...rest } = this.props

    return (
      <Input
        placeholder={placeholder || fieldName || ''}
        value={editing[fieldName] || ''}
        onChangeText={this.onChangeText}
        {...rest}
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

export default connect(mapStateToProps, mapDispatchToProps)(TextField)
