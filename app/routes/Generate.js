import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'
import {Link} from 'react-router'
import $ from 'jquery'

import GenerateHeader from '../components/GenerateHeader'
import GenerateInfo from '../components/GenerateInfo'
import GenerateServicesList from '../components/GenerateServicesList'
import GenerateTotal from '../components/GenerateTotal'

class Generate extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  downloadPDF(){
    window.print()
  }

  render() {
    return (
      <div className="generate grid-container align-center">
        <div className="row align-center">
          <a className="button primary" href="#" onClick={this.downloadPDF}>Imprimir Cotización</a>
          <a href="/create" className="button default">Crear nueva Cotización</a>
        </div>
        <div id="render_me" className="quote column medium-10 align-center">
          <div className="row panel">
            <GenerateHeader />
            <GenerateInfo />
            <GenerateServicesList />
            <GenerateTotal />
          </div>
        </div>
      </div>
    );
  }
}

export default Generate
