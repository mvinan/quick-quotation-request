import React, { Component } from 'react'
import GenerateServiceItem from './GenerateServiceItem'

class GenerateServicesList extends Component {
  render() {
    return (
      <div className="generateServicesList row">
        <div className="generateServicesList-header row align-middle">
          <div className="service column medium-3">Servicio</div>
          <div className="description column medium-7">Descripción</div>
          <div className="price column medium-2 align-center">Costo</div>
        </div>
        <div className="generateServicesList-body row">
          <GenerateServiceItem name="Diseño" description="Esta es una pequeña discription de todo lo que puede hacer" price="120.00"/>
          <GenerateServiceItem name="Desarrollo" description="Esta es una pequeña discription de todo lo que puede hacer" price="190.00"/>
          <GenerateServiceItem name="Programacion" description="Esta es una pequeña discription de todo lo que puede hacer" price="120.00"/>
          <GenerateServiceItem name="UX / UI" description="Esta es una pequeña discription de todo lo que puede hacer" price="56.00"/>
          <GenerateServiceItem name="WHAT!" description="Esta es una pequeña discription de todo lo que puede hacer" price="200.00"/>
        </div>
      </div>
    );
  }
}

export default GenerateServicesList
