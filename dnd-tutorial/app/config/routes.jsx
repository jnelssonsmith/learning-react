import React from 'react'
import { Route, IndexRoute } from 'react-router'

/* Components import here */
import Main from '../components/Main.jsx'
import Home from '../components/Home.jsx'

/* Containers import here*/


module.exports = (
  <Route path="/" component={Main}>
      <IndexRoute component={Home} />
  </Route>
)
