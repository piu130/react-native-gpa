import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-web'
import { TextField } from '.'

export class TestForm extends Component {
  render () {
    return (
      <View>
        <TextField
          autoFocus
          fieldName='name'
        />
        <TextField
          fieldName='mark'
          keyboardType='numeric'
        />
        <TextField
          fieldName='weight'
          keyboardType='numeric'
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TestForm)
