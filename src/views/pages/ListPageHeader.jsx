import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoBackHeader } from '.'

export class ListPageHeader extends Component {
  render () {
    const { title, router } = this.props
    console.log(router)
    return (
      <GoBackHeader
        centerComponent={{
          text: title
        }}
        rightComponent={{
          icon: 'settings'
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  router: state.router
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ListPageHeader)
