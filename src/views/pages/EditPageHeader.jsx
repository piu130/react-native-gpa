import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'
import { GoBackHeader } from '.'
import { duckActions } from '../../state/ducks'

export class EditPageHeader extends Component {
  render () {
    const { save, goBack, entity } = this.props
    const title = entity[0].toUpperCase() + entity.slice(1)

    return (
      <GoBackHeader
        leftComponent={{
          icon: 'clear'
        }}
        centerComponent={{
          text: title
        }}
        rightComponent={{
          icon: 'done',
          onPress: () => {
            save()
            goBack()
          }
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  const entityName = ownProps.entity
  return ({
    save: () => dispatch(duckActions.save(entityName)),
    load: id => dispatch(duckActions.load(entityName, id)),
    goBack: () => dispatch(goBack())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPageHeader)
