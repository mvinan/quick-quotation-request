import React, { Component } from 'react'

import AutomaticColumns from './columns-automatic.js'
import DemostrationColumns from './columns-demostration.js'

class Guidelines extends Component {
  render() {
    return (
      <div className="guidelines grid-container">
        <h1>The Grid</h1>
        <AutomaticColumns columns={6}/>
        <DemostrationColumns columns={12} />
        <DemostrationColumns columns={6} />
        <DemostrationColumns columns={4} />
        <DemostrationColumns columns={3} />
        <DemostrationColumns columns={2} />
        <DemostrationColumns columns={1} />

        <h1>Alineación de Grid</h1>
        <h2>Fully <strong>Center</strong> e hijos</h2>
        <div className="row panel fully-center childrens-too">
          <div className="column box">Text</div>
          <div className="column box-mini">Text</div>
          <div className="column box-mini">Text</div>
        </div>

        <h2>Align <strong>Left</strong></h2>
        <div className="row panel align-left">
          <div className="column box-mini medium-4 fully-center">Text</div>
          <div className="column box-mini medium-4 fully-center">Text</div>
        </div>

        <h2>Align <strong>Center</strong></h2>
        <div className="row panel align-center">
          <div className="column box-mini medium-4 fully-center">Text</div>
          <div className="column box-mini medium-4 fully-center">Text</div>
        </div>

        <h2>Align <strong>Right</strong></h2>
        <div className="row panel align-right">
          <div className="column box-mini medium-4 fully-center">Text</div>
          <div className="column box-mini medium-4 fully-center">Text</div>
        </div>

        <h2>Align <strong>Justify</strong></h2>
        <div className="row panel align-justify">
          <div className="column box-mini medium-2 fully-center">Text</div>
          <div className="column box-mini medium-2 fully-center">Text</div>
          <div className="column box-mini medium-2 fully-center">Text</div>
        </div>

        <h2>Align <strong>Around</strong></h2>
        <div className="row panel align-around">
          <div className="column box-mini medium-2 fully-center">Text</div>
          <div className="column box-mini medium-2 fully-center">Text</div>
          <div className="column box-mini medium-2 fully-center">Text</div>
        </div>

        <h2>Align <strong>Middle</strong></h2>
        <div className="row panel align-middle">
          <div className="column medium-4 box-mini fully-center">Text</div>
          <div className="column medium-4 box fully-center">Text</div>
          <div className="column medium-4 box-mini fully-center">Text</div>
        </div>

        <h2>Align <strong>Top</strong></h2>
        <div className="row panel align-top">
          <div className="column medium-4 box-mini fully-center">Text</div>
          <div className="column medium-4 box fully-center">Text</div>
          <div className="column medium-4 box-mini fully-center">Text</div>
        </div>

        <h2>Align <strong>Bottom</strong></h2>
        <div className="row panel align-bottom">
          <div className="column medium-4 box-mini fully-center">Text</div>
          <div className="column medium-4 box fully-center">Text</div>
          <div className="column medium-4 box-mini fully-center">Text</div>
        </div>

      </div>
    );
  }
}

export default Guidelines
