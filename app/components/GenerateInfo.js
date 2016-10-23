import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'

@connect( store => ({
  from: store.generateForm.values.from,
  to: store.generateForm.values.to,
}))
class GenerateInfo extends Component {
  render() {
    const { from, to } = this.props
    return (
      <div className="row generate-companiesInfo align-justify">
        <div className="column flex-column medium-5">
          <h3>{to.toName}</h3>
          <h4>{to.toAddress}</h4>
          <h4>{to.toDetails}</h4>
        </div>

        <div className="column flex-column medium-5">
          <h3>{from.fromName}</h3>
          <h4>{from.fromAddress}</h4>
          <h4>{from.fromContact}</h4>
          <h4>{from.fromEmail}</h4>
        </div>
      </div>
    );
  }
}

export default GenerateInfo
