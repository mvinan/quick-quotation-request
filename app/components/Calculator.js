import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

import { totalPrice } from '../actions/calculateActions'


@connect( store => ({
  subTotalPrice: store.calculatePrice.subTotalPrice,
  totalPrice: store.calculatePrice.totalPrice
}))
class Calculator extends Component {
  constructor(props){
    super(props)
  }

  componentDidUpdate(){
    const {dispatch, subTotalPrice} = this.props
    dispatch( totalPrice(subTotalPrice))
  }

  render() {
    const { subTotalPrice, totalPrice } = this.props
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
            <h3 className="column medium-4 align-right">{subTotalPrice}</h3>
          </div>
          {addDiscount}
          <div className="calculator-iva row align-right">
            <h4 className="column medium-8 align-right align-bottom">Impuesto</h4>
            <h4 className="column medium-4 align-right" ref="iva">14%</h4>
          </div>
          <div className="calculator-total row align-right">
            <h4 className="column medium-8 align-right align-bottom">Total</h4>
            <h3 className="column medium-4 align-right">{totalPrice}</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator
