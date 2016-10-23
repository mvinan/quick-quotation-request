import React, { Component } from 'react'

class GenerateTotal extends Component {
  render() {
    return (
      <div className="generateTotal row align-right">
        <div className="column  medium-5">
          <div className="generateTotal-price row align-right">
            <h4 className="column align-right">Sub Total</h4>
            <h3  className="column align-right">200</h3>
          </div>
          <div className="generateTotal-price row align-right">
            <h4 className="column align-right">Descuento %</h4>
            <h3  className="column align-right">20</h3>
          </div>
          <div className="generateTotal-price row align-right">
            <h4 className="column align-right">Impuesto 14%</h4>
            <h3  className="column align-right">28</h3>
          </div>
          <div className="generateTotal-total row align-right">
            <h4 className="column align-right">Total</h4>
            <h3  className="column align-right">180 USD</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerateTotal
