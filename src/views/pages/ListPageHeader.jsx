import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'

export class ListPageHeader extends Component {
  render () {
    const { title } = this.props

    return (
      <Header
        centerComponent={{
          text: title
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPageHeader)
