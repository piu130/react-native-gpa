import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'

export class SubjectsPageHeader extends Component {
  render () {
    return (
      <Header
        centerComponent={{
          text: 'Subjects'
        }}
        rightComponent={{
          icon: 'settings'
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPageHeader)
