import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { GoBackHeader } from '.'
import { duckActions } from '../../state/ducks'

export class NewSemesterPageHeader extends Component {
  render () {
    const { save, push } = this.props

    return (
      <GoBackHeader
        centerComponent={{
          text: 'Semester'
        }}
        rightComponent={{
          icon: 'done',
          onPress: () => {
            save()
            push('/')
          }
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {
  save: duckActions.saveSemester,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSemesterPageHeader)
