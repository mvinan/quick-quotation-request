import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'

/*Actions*/
import { removeItem } from '../actions/itemActions'
import * as action from '../actions/calculateActions'
import * as actionG from '../actions/generateActions'

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
    dispatch( action.calcSubTotalPrice(newCalc) )
    dispatch( action.calcTotalPrice(newCalc) )
    dispatch(removeItem(id))
  }

  @autobind
  handlerInput(e){
    const { dispatch } = this.props
    let service = this.refs.service.value
    let price = this.refs.price.value
    let description = this.refs.description.value
    let serviceId = this.refs.serviceItem.id

    dispatch( actionG.updateValueService(serviceId, service, description, price) )
  }

  render() {
    const {id} = this.props
    return (
      <div id={`service-${id}`}  ref="serviceItem" className="service-description row input-group" onBlur={this.handlerInput}>
        <div className="column medium-3">
          <input ref="service" className="item" type="text" placeholder="Que servicio?" />
        </div>
        <div className="column medium-7 fix">
          <textarea ref="description" className="item-description" type="textarea" placeholder="Descripción el servicio…" />
        </div>
        <div className="column medium-2 clear align-self-bottom">
          <input ref="price" id={id} onBlur={this.capturePrice} className="item-price" type="number" placeholder="120,00" step="0.01"/>
        </div>
        <a onClick={this.removeService} ref="removeService" href="#" className="button-remove"><i className="fa fa-minus"></i></a>
      </div>
    );
  }
}

export default ServiceDescription
