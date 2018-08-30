import React, { Component } from 'react'
import { BackHandler } from 'react-native-web'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'
import { goBack } from 'connected-react-router'

export class SemestersPageHeader extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.goBack()
    return true
  }

  render () {
    const { leftComponent, ...rest } = this.props
    return (
      <Header
        leftComponent={{
          icon: 'arrow-back',
          onPress: this.onBackPress,
          ...leftComponent
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
