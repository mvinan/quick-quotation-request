import React, { Component } from 'react'

class Calculator extends Component {
  render() {
    let addDiscount = (
      <div className="row align-right">
        <a className="calculator-addDiscount" href="#">Agregar descuento</a>
      </div>
    )
    return (
      <div className="calculator row align-right">
        <div className="column medium-6">
          <div className="calculator-subtotal row align-right">
            <h4 className="column medium-8 align-right align-bottom">Subtotal</h4>
            <h3 className="column medium-4 align-right">0.00</h3>
          </div>
          {addDiscount}
          <div className="calculator-iva row align-right">
            <h4 className="column medium-8 align-right align-bottom">Impuesto</h4>
            <h4 className="column medium-4 align-right">14%</h4>
          </div>
          <div className="calculator-total row align-right">
            <h4 className="column medium-8 align-right align-bottom">Total</h4>
            <h3 className="column medium-4 align-right">0.00</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator
