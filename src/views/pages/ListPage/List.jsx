import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { selectors } from '../../../state/ducks/entities'
import { ListItem } from '.'

export class List extends Component {
  renderItem = ({ item }) => <ListItem item={item} />

  render () {
    const { items } = this.props

    return (
      <FlatList
        data={Object.values(items)}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    )
  }
}

const mapStateToProps = (state, props) => ({
  items: selectors.entities(state, { entityName: props.entityName, id: props.id })
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(List)
