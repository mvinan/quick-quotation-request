import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'

import QuotedCode from '../components/QuotedCode'
import ServiceItems from '../components/ServiceItems'
import Calculator from '../components/Calculator'
import ToForm from '../components/ToForm'
import FromForm from '../components/FromForm'


class Create extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="create">
        <div className="grid-container">
          <h2 className="row align-center">Laboratorio de Cotizaciones</h2>
        </div>

        <div className="grid-container align-center">
          <div className="form panel column medium-10">
            <div className="row">
              <QuotedCode />

              <div className="row">{/*Companies Data*/}
                <ToForm/>
                <FromForm />
              </div>{/*Companies Data*/}
            </div>

            <div className="row divider">{/*divider*/}
              <div className="column medium-3">
                <h4 className="secondary">Servicio</h4>
              </div>
              <div className="column medium-7">
                <h4 className="secondary">Descripción</h4>
              </div>
              <div className="column medium-2">
                <h4 className="secondary align-right">Precio</h4>
              </div>
            </div>{/*end divider*/}

            <ServiceItems />
            <Calculator />
          </div>
          <div className="row align-center">
            <h4 className="secondary">Usalo como quieras!</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Create
