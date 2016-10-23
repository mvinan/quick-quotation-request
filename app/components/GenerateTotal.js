import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'

@connect(store => ({
  prices: store.generateForm.values.prices,
  hasDiscount: store.calculatePrice.hasDiscount
}))
class GenerateTotal extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  calculateTaxs(){
    const {prices} = this.props
    let tax
    tax = prices.subtotal * 0.14
    tax = Number(tax + '').toFixed(parseInt(2))
    return tax
  }

  render() {
    const {prices, hasDiscount} = this.props
    let discountElement

    discountElement = (
      <div className="generateTotal-price row align-right">
        <h4 className="column align-right">Descuento %</h4>
        <h3  className="column align-right">{prices.discount}</h3>
      </div>)

    return (
      <div className="generateTotal row align-right">
        <div className="column  medium-5">
          <div className="generateTotal-price row align-right">
            <h4 className="column align-right">Sub Total</h4>
            <h3  className="column align-right">{prices.subtotal}</h3>
          </div>

          {hasDiscount ? discountElement : false}

          <div className="generateTotal-price row align-right">
            <h4 className="column align-right">Impuesto 14%</h4>
            <h3  className="column align-right">{this.calculateTaxs()}</h3>
          </div>
          <div className="generateTotal-total row align-right">
            <h4 className="column align-right">Total</h4>
            <h3  className="column align-right">{prices.total} USD</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerateTotal
