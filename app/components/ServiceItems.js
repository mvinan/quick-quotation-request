import React, { Component } from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'

/*Actions*/
import { addItem, removeItem } from '../actions/itemActions'

@connect( store => ({
  numberRow: store.itemFields.currentRows
}))
class ServiceItems extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  addRow(e){
    e.preventDefault();
    const {dispatch} = this.props
    dispatch( addItem() )
  }

  @autobind
  removeRow(e){
    e.preventDefault();
    const {numberRow, dispatch} = this.props
    if(numberRow > 1){
      dispatch( removeItem() )
    }
  }

  render() {
    const {numberRow} = this.props
    let currentRows = _.times(numberRow)
    let removeButton = (<a onClick={this.removeRow} ref="remove-service" href="#" className="button-remove"><i className="fa fa-minus"></i></a>);

    let addButton = (<a onClick={this.addRow} ref="add-service" href="#" className="button-add"><i className="fa fa-plus"></i></a>);

    let serviceRow = currentRows.map((i)=>{
      return (
        <div key={i} ref="description" className="service-description row input-group">
          <div className="column medium-3">
            <input className="item" type="text" placeholder="Que servicio?" />
          </div>
          <div className="column medium-7 fix">
            <textarea className="item-description" type="textarea" placeholder="Descripción el servicio…" />
          </div>
          <div className="column medium-2 clear align-self-bottom">
            <input className="item-price" type="number" placeholder="120,00" step="0.01"/>
          </div>
          { i > 0 ? removeButton : null }
        </div>
      )
    })
    return (
      <div className="service row">
        {addButton}
        {serviceRow}
      </div>
    );
  }
}

export default ServiceItems
