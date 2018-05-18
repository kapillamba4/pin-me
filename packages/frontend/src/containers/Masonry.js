import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MasonryLayout = styled.div`
  margin: 34px 68px 34px 68px;
  z-index: 0;
  height: 100px;
  background-color: gray;
`;

class Masonry extends Component {
  componentWillMount() {}

  render() {
    return <MasonryLayout />;
  }
}

export default connect(null, null)(Masonry);