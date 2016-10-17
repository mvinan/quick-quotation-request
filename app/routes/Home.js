import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home grid-container">
        <h1>Automatic columns</h1>
        <div className="row">
          <div className="column box"></div>
          <div className="column box"></div>
          <div className="column box"></div>
          <div className="column box"></div>
          <div className="column box"></div>
        </div>
        <h2>Column-12</h2>
        <div className="row">
          <div className="column box medium-12"></div>
        </div>
        <h2>column-6</h2>
        <div className="row">
          <div className="column box small-8 medium-6"></div>
          <div className="column box small-8 medium-6"></div>
        </div>

        <h2>column-4</h2>
        <div className="row">
          <div className="column box medium-4"></div>
          <div className="column box medium-4"></div>
          <div className="column box medium-4"></div>
        </div>

        <h2>column-3</h2>
        <div className="row">
          <div className="column box medium-3"></div>
          <div className="column box medium-3"></div>
          <div className="column box medium-3"></div>
          <div className="column box medium-3"></div>
        </div>

        <h2>column-2</h2>
        <div className="row">
          <div className="column box medium-2"></div>
          <div className="column box medium-2"></div>
          <div className="column box medium-2"></div>
          <div className="column box medium-2"></div>
          <div className="column box medium-2"></div>
          <div className="column box medium-2"></div>
        </div>

        <h2>column-1</h2>
        <div className="row">
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
        </div>

        <h2>Cualquier Tipo de Columna</h2>
        <div className="row">
          <div className="column box medium-12"></div>
          <div className="column box medium-2"></div>
          <div className="column box medium-8"></div>
          <div className="column box medium-2 clear"></div>
          <div className="column box medium-6"></div>
          <div className="column box medium-6"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
          <div className="column box medium-1"></div>
        </div>
        <div className="row">
          <div className="column box medium-12"></div>
        </div>
        <div className="row">
          <div className="column box medium-12"></div>
        </div>
        <div className="row">
          <div className="column box medium-4"></div>
          <div className="column box"></div>
          <div className="column box medium-4"></div>
        </div>

        <h2>Fácil y rápida <strong>cotización</strong> para freelancers</h2>
        <h3>Fácil y rápida <strong>cotización</strong> para freelancers</h3>
        <h4>Fácil y rápida <strong>cotización</strong> para freelancers</h4>
        <h5>Fácil y rápida <strong>cotización</strong> para freelancers</h5>
        <h6>Fácil y rápida <strong>cotización</strong> para freelancers</h6>
        <a className="button default phantom">Crea ahora</a>
        <a className="button primary phantom">Crea ahora</a>
        <a className="button secondary phantom">Crea ahora</a>
        <span className="text">Es gratis :)</span>
      </div>
    );
  }
}

export default Home
