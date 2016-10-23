import React, { Component } from 'react'
import GenerateServiceItem from './GenerateServiceItem'
import {connect} from 'react-redux'
import _ from 'lodash'


@connect( store => ({
  serviceList: store.generateForm.values.servicesList
}))
class GenerateServicesList extends Component {
  render() {
    const { serviceList } = this.props
    return (
      <div className="generateServicesList row">
        <div className="generateServicesList-header row align-middle">
          <div className="service column medium-3">Servicio</div>
          <div className="description column medium-7">Descripción</div>
          <div className="price column medium-2 align-center">Costo</div>
        </div>
        <div className="generateServicesList-body row">
          {
            _.map( serviceList, function(serv){
              return <GenerateServiceItem key={serv.id} name={serv.service} description={serv.description} price={serv.price}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default GenerateServicesList
