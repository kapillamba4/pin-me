import React, { Component } from 'react';
import logo0 from '../images/logo-0.png';
import styled from 'styled-components';

const Image = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

export default class Logo extends Component {
  render() {
    return <Image {...this.props} src={logo0} />;
  }
}
