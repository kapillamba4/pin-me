import React, { Component } from 'react';
import styled from 'styled-components';

const SubmitBtnLayout = styled.input.attrs({
  type: 'submit',
  value: (props) => props.value
})`
  min-height: 38px;
  min-width: 40px;
  border-radius: 0 4px 4px 0;
  transition: background-color 0.4s ease;
  cursor: pointer;
  background-color: rgba(38, 50, 56, 0.8);
  border: 0;
  font-size: 1rem;
  color: white;
  &:hover {
    background-color: rgba(0, 150, 136, 0.8);
  }
`;

export default class SubmitButton extends Component {
  render() {
    return <SubmitBtnLayout {...this.props} />;
  }
}
