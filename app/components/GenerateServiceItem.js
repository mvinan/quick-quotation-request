import React, { Component } from 'react'

class GenerateServiceItem extends Component {
  render() {
    return (
      <div className="generateServiceItem row">
        <div className="generateServiceItem-name column small-2 medium-3 align-middle">{this.props.name}</div>
        <div className="generateServiceItem-description column small-4 medium-7">{this.props.description}</div>
        <div className="generateServiceItem-price column small-2 medium-2 align-center align-bottom">{this.props.price}</div>
      </div>
    );
  }
}

export default GenerateServiceItem
