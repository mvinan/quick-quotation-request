import React, { Component } from 'react'
import _ from 'lodash'

class AutomaticColumns extends Component {
  render() {
    let columns = _.times(this.props.columns || 12)
    return (
      <div className="automatic-columns row">
        <div className="row">
          {
            columns.map( (i,column)=>{
              return <div key={i} className="column box-mini totaly-center">auto column</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default AutomaticColumns
