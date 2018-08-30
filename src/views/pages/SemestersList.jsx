import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-web'
import { ListItem } from 'react-native-elements'
import { selectors } from '../../state/ducks/entities'

export class SemestersList extends Component {
  render () {
    const { semesters } = this.props

    return (
      <FlatList
        data={Object.values(semesters)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItem
          title={item.name}
          onPress={() => console.log('blubb')}
        />}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  semesters: selectors.semesters(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersList)
