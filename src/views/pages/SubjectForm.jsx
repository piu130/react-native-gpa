import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { subject as uiSubject } from '../../state/ducks/ui'

export class SubjectForm extends Component {
  render () {
    const { subject, changeProperty } = this.props

    return (
      <Input
        autoFocus
        placeholder='name'
        value={subject.name || ''}
        onChangeText={text => changeProperty('name', text)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  subject: uiSubject.selectors.get(state)
})

const mapDispatchToProps = {
  changeProperty: uiSubject.actions.changeProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectForm)
