import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'

export class SemestersPageHeader extends Component {
  render () {
    return (
      <Header
        centerComponent={{
          text: 'Semesters'
        }}
        rightComponent={{
          icon: 'settings'
        }}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersPageHeader)
