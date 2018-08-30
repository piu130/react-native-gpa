import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { push } from 'connected-react-router'

export class SemestersList extends Component {
  render () {
    const { semester, push } = this.props
    const { id, name } = semester

    return (
      <ListItem
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

export default connect(mapStateToProps, mapDispatchToProps)(SemestersList)
