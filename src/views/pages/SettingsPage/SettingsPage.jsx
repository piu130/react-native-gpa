import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SettingsPageHeader } from '.'
import { MainView as View } from '..'

export class SettingsPage extends Component {
  render () {
    return (
      <View>
        <SettingsPageHeader />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
