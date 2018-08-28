import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native-web'
import { semestersSelectors } from '../../state/ducks/entities/semesters'

export class SemestersPage extends Component {
  render () {
    return (
      <View>
        <Text>Testerli</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  semesters: semestersSelectors.getAll(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersPage)
