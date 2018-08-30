import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { editSemester } from '../../state/ducks/ui'

export class SemesterForm extends Component {
  render () {
    const { semester, changeName } = this.props

    return (
      <Input
        placeholder='name'
        value={semester.name || ''}
        onChangeText={changeName}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  semester: editSemester.selectors.get(state)
})

const mapDispatchToProps = {
  changeName: editSemester.actions.changeName
}

export default connect(mapStateToProps, mapDispatchToProps)(SemesterForm)
