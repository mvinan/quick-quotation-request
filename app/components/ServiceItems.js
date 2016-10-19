import React, { Component } from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'
import uuid from 'uuid'

/*Actions*/
import { addItem } from '../actions/itemActions'
import { saveSubprice, subTotalPrice } from '../actions/calculateActions'

/*Components*/
import ServiceDescription from './ServiceDescription'

@connect( store => ({
  numberRow: store.itemFields.currentRows,
  services: store.itemFields.services
}))
class ServiceItems extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  _service(){
    let id = uuid.v1()
    return (<ServiceDescription key={id} id={id}/>)
  }

  componentDidMount(){
    const {dispatch, numberRow} = this.props
    dispatch( addItem(this._service()) )
  }

  @autobind
  addNewService(e){
    e.preventDefault();
    const {dispatch} = this.props
    dispatch( addItem(this._service()) )
  }

  // @autobind
  // updatePrice(subPrice){
  //   const { dispatch } = this.props
  //   let items
  //
  //   // items = [...document.querySelectorAll('.item-price')]
  //   //
  //   // dispatch( saveSubprice( items ) )
  //   // dispatch( subTotalPrice( items ) )
  //
  //   console.log(subPrice);
  // }

  @autobind
  renderService(){
    const { services  } = this.props
    return services.map( (service, index) => {
      return service
    })
  }

  render() {
    const removeButton = (i) => (<a onClick={this.removeRow} ref="removeService" href="#" className="button-remove"><i className="fa fa-minus"></i></a>);

    return (
      <div className="service row">
        <a onClick={this.addNewService} ref="addService" href="#" className="button-add"><i className="fa fa-plus"></i></a>
        {this.renderService()}
      </div>
    );
  }
}

export default ServiceItems
