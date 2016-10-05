import React from 'react'
import { Route, IndexRoute } from 'react-router'

/* Components */
import Main from '../components/Main'
import Home from '../components/Home'
import Prompt from '../components/Prompt'

/* Containers */
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'

module.exports = (
  <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
      <Route path="battle" component={ConfirmBattleContainer} />
  </Route>
)
