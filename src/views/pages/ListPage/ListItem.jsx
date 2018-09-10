import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { SemesterListItem, SubjectListItem, TestListItem } from '.'

export class ListItem extends Component {
  render () {
    return (
      <Switch>
        <Route path='/(semesters)?' render={() => <SemesterListItem {...this.props} />} exact />
        <Route path='/subjects/:id?' render={() => <SubjectListItem {...this.props} />} exact />
        <Route path='/tests/:id?' render={() => <TestListItem {...this.props} />} exact />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
