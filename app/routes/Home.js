import React, { Component } from 'react'
import {Link} from 'react-router'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <header className="navigationbar align-justify">{/* MENU */}
            <div className="brand">
              <h1><strong>QQ</strong></h1>
            </div>

            <div className="menu right display-flex">
              <h4 className="secondary">Es gratis :)</h4>
              <Link to="/create" className="button primary">Crear nueva Cotización</Link>
            </div>
          </header>{/* END MENU */}
        </div>
        <div className="hero grid-container totaly-center">

          <div className="row align-middle">
            <div className="hero-header column medium-6">
              <h1>Bienvenidos a <strong>Quick Quotes</strong> </h1>
              <p className="column lead medium-9">Genera cotizaciones rápidas, modernas y con gran atención en su diseño.</p>
            </div>
            <div className="hero-image column medium-6">
              <img src="images/idea-process.svg" alt="idea-process"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
