import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { NewSemesterPageHeader, MainView as View } from '.'
import { actions as duckActions } from '../../state/ducks'
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
    const { semester } = this.props
    console.log(semester)
    return (
      <View>
        <NewSemesterPageHeader />
        <Input
          placeholder='name'
          value={semester.name || ''}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  semester: editSemester.selectors.get(state)
})

const mapDispatchToProps = {
  create: editSemester.actions.create,
  load: duckActions.loadSemester
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSemesterPage)
