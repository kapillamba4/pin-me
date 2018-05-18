import React, { Component } from 'react';
import styled from 'styled-components';
import placeholder from '../images/placeholder.png';

const CarousalLayout = styled.div`
  background: url(${placeholder});
  width: max(100% - 68px);
  margin-left: 68px;
  margin-right: 68px;
  height: 240px;
  border-radius: 10px;
`;

export default class HorizontalCarousal extends Component {
  render() {
    return (
      <CarousalLayout>
        <div />
      </CarousalLayout>
    );
  }
}
