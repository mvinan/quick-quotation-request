import React, { Component } from 'react'
import _ from 'lodash'

class DemostrationColumns extends Component {
  render() {
    let columns, n

    columns = _.times(this.props.columns)
    n = 12/this.props.columns

    return (
      <div className="row panel">
        {
          columns.map((i, column) =>{
            return <div key={i} className={`column box-mini medium-${n} fully-center`}>{n == 1 ? `col-${n}` : `medium-${n}`}</div>
          })
        }
      </div>
    );
  }
}

export default DemostrationColumns
