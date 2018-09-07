import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { push } from 'connected-react-router'

export class SemestersListItem extends Component {
  render () {
    const { item, push } = this.props
    const { id, name } = item

    return (
      <ListItem
        subtitle='subtitle'
        title={name}
        onLongPress={() => push(`/semester/edit/${id}`)}
        onPress={() => push(`/subjects/${id}`)}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(SemestersListItem)
