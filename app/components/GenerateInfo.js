import React, { Component } from 'react'

class GenerateInfo extends Component {
  render() {
    return (
      <div className="row generate-companiesInfo align-justify">
        <div className="column flex-column medium-5">
          <h3>Integrales de Oro</h3>
          <h4>Calle 24 de Mayo y segundo cueva celi</h4>
          <h4>Todos los detalles de este emprendimiento</h4>
        </div>

        <div className="column flex-column medium-5">
          <h3>miguelvinan.com</h3>
          <h4>Machala y Guayaquil, Edif Geminis</h4>
          <h4>(+593) 9 8959 5742</h4>
          <h4>admin@miguelvinan.com</h4>
        </div>
      </div>
    );
  }
}

export default GenerateInfo
