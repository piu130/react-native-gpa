import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoBackHeader } from '.'

export class NewSemesterPageHeader extends Component {
  render () {
    return (
      <GoBackHeader
        centerComponent={{
          text: 'Semester'
        }}
        rightComponent={{
          icon: 'done'
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NewSemesterPageHeader)
