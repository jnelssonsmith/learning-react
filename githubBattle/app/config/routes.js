import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Prompt from '../components/Prompt'
import PromptContainer from '../containers/PromptContainer'

module.exports = (
  <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
  </Route>
)
