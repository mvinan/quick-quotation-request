import './styles/components.sass' //STYLES
import { Provider } from 'react-redux'
import store from './store'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './routes/App'
import Home from './routes/Home'

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
