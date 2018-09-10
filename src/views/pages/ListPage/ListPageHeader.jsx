import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'
import { push } from 'connected-react-router'

export class ListPageHeader extends Component {
  onPressSettings = () => {
    const { push } = this.props
    push('/settings')
  }

  render () {
    const { title } = this.props

    return (
      <Header
        centerComponent={{
          text: title
        }}
        rightComponent={{
          icon: 'settings',
          onPress: this.onPressSettings
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPageHeader)
