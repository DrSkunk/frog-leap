import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  position: absolute;
  top: 167px;
  left: ${props=>props.index * 87}px;
  border: 1px red solid;
`

export default class Frog extends Component {
  render() {
    const {type,index} = this.props
    if(type === null){
      return null
    }
    return <Img src={`img/frog_${type}.gif`} index={index} />
  }
}