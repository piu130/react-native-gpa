import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { NewSemesterPageHeader, MainView as View } from '.'

export class NewSemesterPage extends Component {
  render () {
    return (
      <View>
        <NewSemesterPageHeader />
        <Input />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NewSemesterPage)
