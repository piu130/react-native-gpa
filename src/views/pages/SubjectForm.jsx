import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-web'
import { TextField } from '.'

export class SubjectForm extends Component {
  render () {
    return (
      <View>
        <TextField
          autoFocus
          fieldName='name'
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectForm)
