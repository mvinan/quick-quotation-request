import React, { Component } from 'react'

class QuotedCode extends Component {
  render() {
    return (
      <div className="row align-justify">
        <div className="column medium-6">
          <h4>Aquí Logo!</h4>
        </div>

        <div className="quoted-code column medium-4">{/*Quoted data*/}
          <div className="row align-middle">
            <h5 className="column align-right">Cotización Nº:</h5>
            <input className="column" type="number"/>
          </div>

          <div className="row align-middle">
            <h5 className="column align-right">Fecha:</h5>
            <input className="column" type="date"/>
          </div>

          <div className="row align-middle">
            <h5 className="column align-right">Cliente:</h5>
            <input className="column" type="text"/>
          </div>
        </div>{/*End Quoted Data*/}
      </div>
    );
  }
}

export default QuotedCode
