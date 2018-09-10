import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { SemesterForm, SubjectForm, TestForm } from '.'

export class EditForm extends Component {
  renderSemesterForm = () => <SemesterForm {...this.props} />
  renderSubjectForm = () => <SubjectForm {...this.props} />
  renderTestForm = () => <TestForm {...this.props} />

  render () {
    return (
      <Switch>
        <Route exact path='/semester/:action/:id?' render={this.renderSemesterForm} />
        <Route exact path='/subject/:action/:id?' render={this.renderSubjectForm} />
        <Route exact path='/test/:action/:id?' render={this.renderTestForm} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
