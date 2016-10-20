import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'

/*Actions*/
import { removeItem } from '../actions/itemActions'
import { calcSubTotalPrice, calcTotalPrice } from '../actions/calculateActions'

@connect( store => ({
  subPrice: store.calculatePrice.subTotalPrice
}))
class ServiceDescription extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  capturePrice(e){
    let targetId = e.target.id
    let targetValue = e.target.value
    const {dispatch, id} = this.props
    if( targetValue ){
      this.props.updatePrice()
    }
  }

  @autobind
  removeService(e){
    e.preventDefault();
    const { dispatch, id, subPrice } = this.props
    let newCalc = subPrice - this.refs.price.value
    dispatch( calcSubTotalPrice(newCalc) )
    dispatch( calcTotalPrice(newCalc) )
    dispatch(removeItem(id))
  }

  render() {
    const {id} = this.props
    return (
      <div id={`service-${id}`}  ref="description" className="service-description row input-group">
        <div className="column medium-3">
          <input className="item" type="text" placeholder="Que servicio?" />
        </div>
        <div className="column medium-7 fix">
          <textarea className="item-description" type="textarea" placeholder="Descripción el servicio…" />
        </div>
        <div className="column medium-2 clear align-self-bottom">
          <input id={id} onBlur={this.capturePrice} ref="price" className="item-price" type="number" placeholder="120,00" step="0.01"/>
        </div>
        <a onClick={this.removeService} ref="removeService" href="#" className="button-remove"><i className="fa fa-minus"></i></a>
      </div>
    );
  }
}

export default ServiceDescription
