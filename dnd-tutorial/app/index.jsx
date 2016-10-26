import React from 'react'
import { render } from 'react-dom'
import Board from './components/Board.jsx'
import { observe } from './components/Game.jsx'
import routes from './config/routes.jsx'

const rootEl = document.getElementById('app');
observe(knightPosition =>
    render((
        <Board knightPosition={knightPosition} />
    ), rootEl)
);
