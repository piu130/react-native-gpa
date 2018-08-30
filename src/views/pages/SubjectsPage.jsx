import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SubjectsList, SubjectsPageHeader, AddButton, MainView as View } from '.'

export class SubjectsPage extends Component {
  render () {
    const { match } = this.props

    return (
      <View>
        <SubjectsPageHeader />
        <SubjectsList semesterId={match.params.id} />
        <AddButton path='/subject/create' />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage)
