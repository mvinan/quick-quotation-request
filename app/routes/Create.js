import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'

import QuotedCode from '../components/QuotedCode'
import ServiceItems from '../components/ServiceItems'
import Calculator from '../components/Calculator'

class Create extends Component {
  render() {
    return (
      <div className="create">
        <div className="grid-container">
          <h2 className="row align-center">Laboratorio de Cotizaciones</h2>
        </div>

        <div className="grid-container align-center">
          <form className="form panel column medium-10">
            <div className="row">
              <QuotedCode />

              <div className="row">{/*Companies Data*/}
                <div className="column medium-6"> {/*To*/}
                  <small className="light">Para:</small>
                  <div className="row flex-column">
                    <div className="input-group column medium-10">
                      <label>Nombre</label>
                      <input type="text" placeholder="Nombre de la compañia..."/>
                    </div>
                    <div className="input-group column medium-10">
                      <label>Dirección</label>
                      <input type="text" placeholder="Dirección, codigo postal, ciudad, país..."/>
                    </div>
                    <div className="input-group column medium-10">
                      <label>Detalles</label>
                      <textarea type="textarea" placeholder="Detalles, telefono de contacto, nº casa, etc..."/>
                    </div>
                  </div>
                </div>{/*End To*/}
                <div className="column medium-6">{/*From*/}
                  <small className="light">Desde:</small>
                  <div className="row flex-column">
                    <div className="input-group column medium-10">
                      <label>Nombre</label>
                      <input type="text" placeholder="Nombre de la compañia..."/>
                    </div>
                    <div className="input-group column medium-10">
                      <label>Dirección</label>
                      <input type="text" placeholder="Dirección, codigo postal, ciudad, país..."/>
                    </div>
                    <div className="input-group column medium-10">
                      <label>Contacto</label>
                      <input type="tel" placeholder="(+593) 9 8959 5742"/>
                    </div>
                    <div className="input-group column medium-10">
                      <label>Correo electrónico</label>
                      <input type="email" placeholder="compania@dominio.com"/>
                    </div>
                  </div>
                </div>{/*End From*/}
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
          </form>
          <div className="row align-center">
            <h4 className="secondary">Usalo como quieras!</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Create
