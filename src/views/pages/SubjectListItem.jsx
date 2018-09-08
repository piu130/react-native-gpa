import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { push } from 'connected-react-router'

export class SubjectListItem extends Component {
  render () {
    const { item, push } = this.props
    const { id, name } = item

    return (
      <ListItem
        title={name}
        onLongPress={() => push(`/subject/edit/${id}`)}
        onPress={() => push(`/tests/${id}`)}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectListItem)
