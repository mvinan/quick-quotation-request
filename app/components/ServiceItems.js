import React, { Component } from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'
import uuid from 'uuid'

/*Actions*/
import { addItem } from '../actions/itemActions'
import { calcTotalPrice, calcSubTotalPrice } from '../actions/calculateActions'

/*Components*/
import ServiceDescription from './ServiceDescription'

@connect( store => ({
  numberRow: store.itemFields.currentRows,
  services: store.itemFields.services,
  subTotalPrice: store.calculatePrice.subTotalPrice
}))
class ServiceItems extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  _service(){
    let id = uuid.v1()
    return (<ServiceDescription key={id} id={id} updatePrice={this.updatePrice}/>)
  }

  componentDidMount(){
    const {dispatch, numberRow} = this.props
    if(numberRow == 0){
      dispatch( addItem(this._service()) )
    }
  }

  @autobind
  addNewService(e){
    e.preventDefault();
    const {dispatch} = this.props
    dispatch( addItem(this._service()) )
  }

  @autobind
  _itemsFields(){
    return [...document.querySelectorAll('.item-price')]
  }

  @autobind
  updatePrice(e){
    let items = this._itemsFields()
    let prices = items.map( price => Number(price.value) )
    let sumPrices = _.sum(prices)
    const { dispatch } = this.props
    dispatch( calcSubTotalPrice( sumPrices ))
    dispatch( calcTotalPrice( sumPrices ))
  }

  @autobind
  renderService(){
    const { services  } = this.props
    return services.map( (service, index) => {
      return service
    })
  }

  render() {
    return (
      <form className="service row">
        <a onClick={this.addNewService} ref="addService" href="#" className="button-add"><i className="fa fa-plus"></i></a>
        {this.renderService()}
      </form>
    );
  }
}

export default ServiceItems
