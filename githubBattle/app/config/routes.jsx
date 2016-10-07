import React from 'react'
import { Route, IndexRoute } from 'react-router'

/* Components */
import Main from '../components/Main.jsx'
import Home from '../components/Home.jsx'
import Prompt from '../components/Prompt.jsx'

/* Containers */
import PromptContainer from '../containers/PromptContainer.jsx'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer.jsx'
import ResultsContainer from '../containers/ResultsContainer.jsx'

module.exports = (
  <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
      <Route path="battle" component={ConfirmBattleContainer} />
      <Route path="results" component={ResultsContainer} />
  </Route>
)
