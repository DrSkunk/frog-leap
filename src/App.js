import React, { Component } from 'react';
import styled from 'styled-components';
import Frog from './Frog';

const frogType = {
  green: "green",
  brown: "brown",
}

const Root = styled.div`
  position: relative;
  top: 0;
  left: 0;
`

const Board = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`


export default class App extends Component {

  state = {
    board: [
      frogType.green,
      frogType.green,
      frogType.green,
      null,
      frogType.brown,
      frogType.brown,
      frogType.brown,
    ]
  }

  render() {
    const frogs = this.state.board.map((frog,i) => <Frog key={i} type={frog} index={i}/>)
    return <Root><Board src="img/background.jpg"/>{frogs}</Root>
  }
}