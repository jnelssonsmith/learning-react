import React, { Component, PropTypes } from 'react';
import SquareContainer from '../containers/SquareContainer.jsx';
import Knight from './Knight.jsx';
import { moveKnight, canMoveKnight } from './Game.jsx';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

class Board extends Component {
    renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        <SquareContainer x={x}
                     y={y}>
          {this.renderPiece(x, y)}
        </SquareContainer>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
  } else {
      return (
          <span>.</span>
      );
  }
  }
  handleSquareClick(toX, toY) {
      if(canMoveKnight(toX, toY)){
          moveKnight(toX, toY);
      }
 }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

export default DragDropContext(HTML5Backend)(Board);
