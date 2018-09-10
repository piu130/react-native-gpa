import React, { Component } from 'react'
import { connect } from 'react-redux'
import capitalize from 'capitalize'
import { List, ListPageHeader } from '.'
import { AddButton, MainView as View } from '..'

export class ListPage extends Component {
  render () {
    const { match } = this.props
    const { id, entity } = match.params
    let path = `/${entity.slice(0, -1)}/create`
    path += id ? `/${id}` : ''

    return (
      <View>
        <ListPageHeader title={capitalize(entity)} />
        <List id={id} entityName={entity} />
        <AddButton path={path} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
