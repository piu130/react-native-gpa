import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SemestersList, SemestersPageHeader, AddButton, MainView as View } from '.'

export class SemestersPage extends Component {
  render () {
    return (
      <View>
        <SemestersPageHeader />
        <SemestersList />
        <AddButton path='/semester/create' />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersPage)
