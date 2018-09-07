import React, { Component } from 'react'
import { connect } from 'react-redux'
import capitalize from 'capitalize'
import { EditPageHeader, EditForm, MainView as View } from '.'
import { duckActions } from '../../state/ducks'
import { uiActions } from '../../state/ducks/ui'

export class EditPage extends Component {
  constructor (props) {
    super()
    const { create, load, match } = props
    const { action, id } = match.params
    switch (action) {
      case 'create':
        create(id ? { parentId: id } : undefined)
        break
      case 'edit':
        load(id)
        break
    }
  }

  render () {
    const { match } = this.props
    const { entity } = match.params

    return (
      <View>
        <EditPageHeader
          entity={entity}
          title={capitalize(entity)}
        />
        <EditForm />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  const entityName = ownProps.match.params.entity
  return ({
    create: params => dispatch(uiActions.create(entityName, params)),
    load: id => dispatch(duckActions.load(entityName, id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
