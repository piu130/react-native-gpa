import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { SemesterForm, SubjectForm } from '.'

export class EditForm extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/semester/:action/:id?' render={() => <SemesterForm {...this.props} />} />
        <Route exact path='/subject/:action/:id?' render={() => <SubjectForm {...this.props} />} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
