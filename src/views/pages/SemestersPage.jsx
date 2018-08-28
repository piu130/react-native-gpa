import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-web'
import { SemestersList, SemestersPageHeader } from '.'

export class SemestersPage extends Component {
  render () {
    return (
      <View>
        <SemestersPageHeader />
        <SemestersList />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersPage)
