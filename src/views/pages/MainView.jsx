import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-web'

export class MainView extends Component {
  render () {
    const { style, children, ...rest } = this.props
    return (
      <View
        style={{
          height: '100%',
          ...style
        }}
        {...rest}
      >
        {children}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
