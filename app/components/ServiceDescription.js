import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'

/*Actions*/
import { removeItem } from '../actions/itemActions'
import { saveSubprice, subTotalPrice } from '../actions/calculateActions'

@connect( store => ({
  services: store.itemFields.services
}))
class ServiceDescription extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  removeService(e){
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(removeItem( this.props.id ))
  }

  @autobind
  captureSubPrice(e){
    const { dispatch } = this.props
    let subPriceNumber = new Number(this.refs.price.value)
    dispatch(saveSubprice( subPriceNumber ))
  }

  render() {
    return (
      <div id={`service-${this.props.id}`}  ref="description" className="service-description row input-group">
        <div className="column medium-3">
          <input className="item" type="text" placeholder="Que servicio?" />
        </div>
        <div className="column medium-7 fix">
          <textarea className="item-description" type="textarea" placeholder="Descripción el servicio…" />
        </div>
        <div className="column medium-2 clear align-self-bottom">
          <input onChange={this.captureSubPrice} ref="price" className="item-price" type="number" placeholder="120,00" step="0.01"/>
        </div>
        <a onClick={this.removeService} ref="removeService" href="#" className="button-remove"><i className="fa fa-minus"></i></a>
      </div>
    );
  }
}

export default ServiceDescription
