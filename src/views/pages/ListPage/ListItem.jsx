import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { SemesterListItem, SubjectListItem, TestListItem } from '.'

export class ListItem extends Component {
  renderSemesterListItem = () => <SemesterListItem {...this.props} />
  renderSubjectListItem = () => <SubjectListItem {...this.props} />
  renderTestListItem = () => <TestListItem {...this.props} />

  render () {
    return (
      <Switch>
        <Route path='/(semesters)?' render={this.renderSemesterListItem} exact />
        <Route path='/subjects/:id?' render={this.renderSubjectListItem} exact />
        <Route path='/tests/:id?' render={this.renderTestListItem} exact />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
