import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { push } from 'connected-react-router'

export class TestListItem extends Component {
  onPressEdit = () => {
    const { item, push } = this.props
    const { id } = item
    push(`/test/edit/${id}`)
  }

  render () {
    const { item } = this.props
    const { name } = item

    return (
      <ListItem
        title={name}
        onLongPress={this.onPressEdit}
        onPress={this.onPressEdit}
        badge={{ value: item.grade }}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(TestListItem)
