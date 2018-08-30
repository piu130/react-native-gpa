import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SemestersList, SemestersPageHeader, AddSemesterButton, MainView as View } from '.'

export class SemestersPage extends Component {
  render () {
    return (
      <View>
        <SemestersPageHeader />
        <SemestersList />
        <AddSemesterButton />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersPage)
