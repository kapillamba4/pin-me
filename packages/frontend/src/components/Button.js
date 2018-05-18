import React, { Component } from 'react';
import styled from 'styled-components';

const ClickableBtn = styled.span`
  text-decoration: none;
  cursor: pointer;
  padding: 8px;
  margin: 2px;
  height: 20px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => (props.isOutlined ? '1px solid rgb(234, 46, 100)' : '1px solid transparent')};
  background-color: ${(props) => (props.isColored ? 'rgb(234, 46, 100)' : 'white')};
  border-radius: 4px;
  color: ${(props) => (props.isColored ? 'white' : 'rgba(0, 0, 0, 0.4)')};
  &:hover {
    color: ${(props) => (props.isColored ? 'white' : 'rgba(0, 0, 0, 0.6)')};
  }
`;

export default class Button extends Component {
  render() {
    return <ClickableBtn {...this.props}>{this.props.text}</ClickableBtn>;
  }
}
