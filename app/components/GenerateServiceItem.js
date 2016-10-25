import React, { Component } from 'react'
import autobind from 'autobind-decorator'

class GenerateServiceItem extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  createMarkup(){
    return {__html: this.props.description}
  }

  render() {
    return (
      <div className="generateServiceItem row">
        <div className="generateServiceItem-name column small-2 medium-3 align-middle">{this.props.name}</div>
        <div className="generateServiceItem-description column small-4 medium-7" dangerouslySetInnerHTML={this.createMarkup()}></div>
        <div className="generateServiceItem-price column small-2 medium-2 align-center align-middle">{this.props.price}</div>
      </div>
    );
  }
}

export default GenerateServiceItem
