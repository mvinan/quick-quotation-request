import React, { Component } from 'react'
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'

@connect( store => ({
  values: store.generateForm.values
}))
class Generate extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="generate">
        <h1>Generate</h1>
      </div>
    );
  }
}

export default Generate
