import React, { Component } from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

import { addDiscount, sendDiscount, calcTotalPrice } from '../actions/calculateActions'


@connect( store => ({
  subTotalPrice: store.calculatePrice.subTotalPrice,
  totalPrice: store.calculatePrice.totalPrice,
  hasDiscount: store.calculatePrice.hasDiscount,
  discount: store.calculatePrice.discount
}))
class Calculator extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  handlerDiscountButton(e){
    const { dispatch } = this.props
    e.preventDefault();
    dispatch( addDiscount(true) )
  }

  @autobind
  _calculateDiscount(){
    const { subTotalPrice, discount, dispatch } = this.props
    let discountValue, discountLocal, calculateTotal, addDecimalsToTotal

    discountValue = Number(discount)
    discountLocal = discountValue / 100
    calculateTotal = Number(subTotalPrice) - (Number(subTotalPrice) * discountLocal)
    addDecimalsToTotal = Number(calculateTotal+'').toFixed(parseInt(2))
    return addDecimalsToTotal
  }

  @autobind
  _calculateTotal(){
    const { subTotalPrice, dispatch } = this.props
    let subTotalWithDiscount = this._calculateDiscount()
    let calculateTotalWithDiscount = subTotalWithDiscount * 1.14

    let withDecimals = Number(calculateTotalWithDiscount+'').toFixed(parseInt(2))
    return withDecimals
  }

  @autobind
  updatePriceWithDiscount(){
    const { dispatch, subTotalPrice } = this.props
    let discount = this.refs.discount.value
    if(discount){
      dispatch(sendDiscount(discount))
    }
  }

  render() {
    const { subTotalPrice, totalPrice, hasDiscount } = this.props
    const addDiscountButton = (<a onClick={this.handlerDiscountButton} className="calculator-addDiscount" href="#">Agregar descuento</a>);

    const inputDiscount = (
      <div className="row align-justify">
        <h5 className="secondary column medium-8 align-right">Descuento %</h5>
        <input onBlur={this.updatePriceWithDiscount} id="input-discount" ref="discount" className="column medium-2" type="number"></input>
      </div>);

    return (
      <div className="calculator row align-right">
        <div className="column medium-6">
          <div className="calculator-subtotal row align-right">
            <h4 className="column medium-8 align-right align-bottom">Subtotal</h4>
            <h3 className="column medium-4 align-right">{subTotalPrice}</h3>
          </div>

          <div className="row align-right">
            { !hasDiscount ? addDiscountButton : inputDiscount }
          </div>

          <div className="calculator-iva row align-right">
            <h4 className="column medium-8 align-right align-bottom">Impuesto</h4>
            <h4 className="column medium-4 align-right" ref="iva">14%</h4>
          </div>
          <div className="calculator-total row align-right">
            <h4 className="column medium-8 align-right align-bottom">Total</h4>
            <h3 className="column medium-4 align-right">{hasDiscount ? this._calculateTotal() : totalPrice }</h3>
          </div>
        </div>
        <div className="calculator-button row align-right">
          <Link id="generator" onClick={this.generateQuote} to="/create/generate" className="button primary"> Generar Cotización</Link>
        </div>
      </div>
    );
  }
}

export default Calculator
