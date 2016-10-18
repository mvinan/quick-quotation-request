import React, { Component } from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'

class ServiceItems extends Component {
  constructor(props){
    super(props)
    this.state = { nRows: 1 }
  }

  @autobind
  addRow(e){
    e.preventDefault();
    const {nRows} = this.state
    this.setState({nRows: nRows + 1})
  }

  @autobind
  removeRow(e){
    e.preventDefault();
    const {nRows} = this.state
    if(nRows > 1){
      this.setState({nRows: nRows - 1})
    }
  }

  render() {
    const {nRows} = this.state
    let currentRows = _.times(nRows)
    let serviceRow = currentRows.map((i)=>{
      let removeButton = (
        <a onClick={this.removeRow} ref="remove-service" href="#" className="button-remove"><i className="fa fa-minus"></i></a>
      )
      return (
        <div key={i} ref="description" className="service-description row input-group">
          <div className="column medium-4">
            <input type="text" placeholder="Que servicio?" />
          </div>
          <div className="column medium-6 fix">
            <textarea type="textarea" placeholder="Descripción el servicio…" />
          </div>
          <div className="column medium-2 clear align-self-bottom">
            <input type="number" placeholder="120,00" step="0.01"/>
          </div>
          { i > 0 ? removeButton : null }
        </div>
      )
    })
    return (
      <div className="service row">
        <a onClick={this.addRow} ref="add-service" href="#" className="button-add"><i className="fa fa-plus"></i></a>
        {serviceRow}
      </div>
    );
  }
}

export default ServiceItems
