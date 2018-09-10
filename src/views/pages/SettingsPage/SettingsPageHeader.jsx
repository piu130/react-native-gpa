import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoBackHeader } from '..'

export class SettingsPageHeader extends Component {
  render () {
    return (
      <GoBackHeader
        centerComponent={{
          text: 'Settings'
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageHeader)
