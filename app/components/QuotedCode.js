import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'

import * as action from '../actions/generateActions'

@connect()
class QuotedCode extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  handlerForm(e){
    const {dispatch} = this.props
    let name, value

    name = e.target.name
    value = e.target.value
    dispatch( action.updateValuesQuotedCode(name, value) )
  }

  render() {
    return (
      <div className="row align-justify">
        <div className="column medium-6">
          <h4>Aquí Logo!</h4>
        </div>

        <form className="quoted-code column medium-4" onBlur={this.handlerForm}>{/*Quoted data*/}
          <div className="row align-middle">
            <h5 className="column align-right">Cotización Nº:</h5>
            <input name="quotedCode" className="column" type="number"/>
          </div>

          <div className="row align-middle">
            <h5 className="column align-right">Fecha:</h5>
            <input name="quotedDate" className="column" type="date"/>
          </div>

          <div className="row align-middle">
            <h5 className="column align-right">Cliente:</h5>
            <input name="quotedClient" className="column" type="text"/>
          </div>
        </form>{/*End Quoted Data*/}
      </div>
    );
  }
}

export default QuotedCode
