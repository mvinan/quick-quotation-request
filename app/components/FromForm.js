import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'

import * as action from '../actions/generateActions'

@connect()
class FromForm extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  handlerForm(e){
    const {dispatch} = this.props
    let name, value

    name = e.target.name
    value = e.target.value
    dispatch( action.updateValuesFrom(name, value) )
  }

  render() {
    return (
      <div className="column medium-6">{/*From*/}
        <small className="light">Desde:</small>
        <form className="row flex-column" onBlur={this.handlerForm}>
          <div className="input-group column medium-10">
            <label>Nombre</label>
            <input name="fromName" type="text" placeholder="Nombre de la compañia..."/>
          </div>
          <div className="input-group column medium-10">
            <label>Dirección</label>
            <input name="fromAddress" type="text" placeholder="Dirección, codigo postal, ciudad, país..."/>
          </div>
          <div className="input-group column medium-10">
            <label>Contacto</label>
            <input name="fromContact" type="tel" placeholder="(+593) 9 8959 5742"/>
          </div>
          <div className="input-group column medium-10">
            <label>Correo electrónico</label>
            <input name="fromEmail" type="email" placeholder="compania@dominio.com"/>
          </div>
        </form>
      </div>
    );
  }
}

export default FromForm
