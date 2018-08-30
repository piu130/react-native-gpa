import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { editSemester } from '../../state/ducks/ui'

export class SemesterForm extends Component {
  render () {
    const { semester } = this.props

    return (
      <Input
        placeholder='name'
        value={semester.name || ''}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  semester: editSemester.selectors.get(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SemesterForm)
