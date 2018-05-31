import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import MasonryPanel from '../components/MasonryPanel';

const MasonryLayout = styled.div`
  margin: 34px 68px 34px 68px;
  z-index: 0;
  column-count: 3;
  column-gap: 20px;
  z-index: 0;
`;

class Masonry extends Component {
  componentWillMount() {
    this.props.fetchPaginateImages(0);
  }

  render() {
    const { data } = this.props;
    data.forEach((el) => console.log(el));
    return <MasonryLayout>{data.map((el, id) => <MasonryPanel {...this.props} key={id} data={el} />)}</MasonryLayout>;
  }
}

const mapStateToProps = (state) => ({ ...state.masonry, ...state.pin });
const matchDispatchToProps = (dispatch) => bindActionCreators({ ...actions.masonry, ...actions.pin }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Masonry);
