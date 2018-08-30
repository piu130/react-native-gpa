import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EditPageHeader, SemesterForm, MainView as View } from '.'
import { duckActions } from '../../state/ducks'
import { uiActions } from '../../state/ducks/ui'

export class EditPage extends Component {
  constructor (props) {
    super()
    const { create, load, match } = props
    const { action, id } = match.params
    switch (action) {
      case 'create':
        create()
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
          title={entity[0].toUpperCase() + entity.slice(1)}
        />
        <SemesterForm />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  const entityName = ownProps.match.params.entity
  return ({
    create: () => dispatch(uiActions.create(entityName)),
    load: id => dispatch(duckActions.load(entityName, id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
