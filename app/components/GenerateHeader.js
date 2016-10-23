import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'

@connect( store => ({
  codes: store.generateForm.values.quotedCode
}))
class GenerateHeader extends Component {
  render() {
    const {codes} = this.props
    return (
      <div className="row align-middle">
        <div className="generate-brand column medium-6 align-left">
          <figure className="brand align-middle align-center">
            <img src="/images/logo_black.png" alt="Logotipo - Miguel Viñan"/>
          </figure>
        </div>
        <div className="generate-code column flex-column medium-6 align-right">
          <div className="row generate-code-info number">
            <p className="title column medium-8 align-right">Cotización Nº:</p>
            <p className="value column medium-4 align-left">{codes.quotedCode}</p>
          </div>
          <div className="row generate-code-info">
            <p className="title column medium-8 align-right">Fecha:</p>
            <p className="value column medium-4 align-left">{codes.quotedDate}</p>
          </div>
          <div className="row generate-code-info">
            <p className="title column medium-8 align-right">Cliente:</p>
            <p className="value column medium-4 align-left">{codes.quotedClient}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerateHeader
