import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native-web'
import { selectors } from '../../state/ducks/entities'

export class SubjectsList extends Component {
  render () {
    // const { subjects } = this.props
    // console.log(subjects)
    return (
      <Text>Hello</Text>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(props)
  return ({
    subjects: selectors.subjectsBySemesterId(state, { id: props.semesterId })
  })
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsList)
