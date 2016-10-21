import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'
import * as action from '../actions/generateActions'

@connect()
class ToForm extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  handlerForm(e){
    const {dispatch} = this.props
    let name, value

    name = e.target.name
    value = e.target.value
    dispatch( action.updateValuesTo(name, value) )
  }

  render() {
    return (
      <div className="column medium-6">
        <small className="light">Para:</small>
        <form className="row flex-column" onBlur={this.handlerForm}>
          <div className="input-group column medium-10">
            <label>Nombre</label>
            <input name="toName" type="text" placeholder="Nombre de la compañia..."/>
          </div>
          <div className="input-group column medium-10">
            <label>Dirección</label>
            <input name="toAddress" type="text" placeholder="Dirección, codigo postal, ciudad, país..."/>
          </div>
          <div className="input-group column medium-10">
            <label>Detalles</label>
            <textarea name="toDetails" type="textarea" placeholder="Detalles, telefono de contacto, nº casa, etc..."/>
          </div>
        </form>
      </div>
    );
  }
}

export default ToForm
