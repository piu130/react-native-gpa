import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { semester as uiSemester } from '../../state/ducks/ui'

export class SemesterForm extends Component {
  render () {
    const { semester, changeProperty } = this.props

    return (
      <Input
        autoFocus
        placeholder='name'
        value={semester.name || ''}
        onChangeText={text => changeProperty('name', text)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  semester: uiSemester.selectors.get(state)
})

const mapDispatchToProps = {
  changeProperty: uiSemester.actions.changeProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(SemesterForm)
