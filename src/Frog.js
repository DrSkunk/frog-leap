import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  position: absolute;
  top: 167px;
  left: ${(props) => props.index * 87}px;
  cursor: pointer;
  z-index: 10;
`;

export default class Frog extends Component {
  render() {
    const { type, index, onClick } = this.props;
    if (type === null) {
      return null;
    }
    return <Img src={`img/frog_${type}.gif`} index={index} onClick={onClick} />;
  }
}
