import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NewSemesterPageHeader, SemesterForm, MainView as View } from '.'
import { duckActions } from '../../state/ducks'
import { editSemester } from '../../state/ducks/ui'

export class NewSemesterPage extends Component {
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
    return (
      <View>
        <NewSemesterPageHeader />
        <SemesterForm />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  create: editSemester.actions.create,
  load: duckActions.loadSemester
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSemesterPage)
