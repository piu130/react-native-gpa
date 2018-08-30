import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'
import { goBack } from 'connected-react-router'

export class SemestersPageHeader extends Component {
  render () {
    const { goBack, ...rest } = this.props
    return (
      <Header
        leftComponent={{
          icon: 'arrow-back',
          onPress: goBack
        }}
        {...rest}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {
  goBack
}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersPageHeader)
