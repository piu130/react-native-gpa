import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { push } from 'connected-react-router'

export class SemestersListItem extends Component {
  onEdit = () => {
    const { item, push } = this.props
    const { id } = item
    push(`/semester/edit/${id}`)
  }

  onInspect = () => {
    const { item, push } = this.props
    const { id } = item
    push(`/subjects/${id}`)
  }

  render () {
    const { item } = this.props
    const { name } = item

    return (
      <ListItem
        title={name}
        onLongPress={this.onEdit}
        onPress={this.onInspect}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersListItem)
