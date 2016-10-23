import './styles/components.sass' //STYLES
import { Provider } from 'react-redux'
import store from './store'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './routes/App'
import Home from './routes/Home'
import Guidelines from './routes/Guidelines/'
import Create from './routes/Create'
import Generate from './routes/Generate'

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/guidelines" component={Guidelines}/>
        <Route path="/create" component={Create}/>
        <Route path="/generate" component={Generate}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
