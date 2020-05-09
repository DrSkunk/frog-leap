import React, { Component } from 'react';
import styled from 'styled-components';
import Frog from './Frog';

const frogType = {
  green: 'green',
  brown: 'brown',
};

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const Board = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const ResetButton = styled.button`
  position: absolute;
  top: 418px;
  left: 0;
  z-index: 10;
  font-size: 3em;
`;

const Congratulations = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  z-index: 10;
  top: 140px;
  left: 104px;
  padding: 40px;
  border-radius: 50px;
  font-size: 3em;
`;

const initialBoardState = [
  frogType.green,
  frogType.green,
  frogType.green,
  null,
  frogType.brown,
  frogType.brown,
  frogType.brown,
];

export default class App extends Component {
  state = {
    board: initialBoardState,
  };

  jump = (frogIndex) => {
    this.setState((state) => {
      const frog = state.board[frogIndex];
      const emptyPlaceIndex = state.board.indexOf(null);
      const newBoard = JSON.parse(JSON.stringify(state.board));
      if (frog === frogType.green) {
        if (frogIndex < emptyPlaceIndex && emptyPlaceIndex - frogIndex <= 2) {
          newBoard[emptyPlaceIndex] = frogType.green;
          newBoard[frogIndex] = null;
          this.setState({ board: newBoard });
        }
      } else {
        if (frogIndex > emptyPlaceIndex && frogIndex - emptyPlaceIndex <= 2) {
          newBoard[emptyPlaceIndex] = frogType.brown;
          newBoard[frogIndex] = null;
          this.setState({ board: newBoard });
        }
      }
    });
  };

  reset = () => {
    this.setState({ board: initialBoardState });
  };

  render() {
    const { board } = this.state;
    const frogs = board.map((frog, i) => (
      <Frog onClick={() => this.jump(i)} key={i} type={frog} index={i} />
    ));
    const finishedGame =
      JSON.stringify(board) ===
      JSON.stringify([
        frogType.brown,
        frogType.brown,
        frogType.brown,
        null,
        frogType.green,
        frogType.green,
        frogType.green,
      ]);

    return (
      <div>
        <Wrapper>
          <ResetButton onClick={this.reset}>Reset</ResetButton>

          <Board src="img/background.jpg" />
          {frogs}
        </Wrapper>
        {finishedGame ? (
          <Congratulations>Congratulations!</Congratulations>
        ) : null}
      </div>
    );
  }
}
