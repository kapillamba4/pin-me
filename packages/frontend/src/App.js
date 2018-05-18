import React, { Component, Fragment } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CloseUpPage from './containers/CloseUpPage';
import HeaderBar from './containers/HeaderBar';
import DropDown from './components/DropDown';
import FileUpload from './components/FileUpload';
import HorizontalCarousal from './components/HorizontalCarousal';
import styled from 'styled-components';
import Masonry from './containers/Masonry';

const AppLayout = styled.div`
  left: 50%;
  margin-top: 80px;
  #app-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1360px;
  }
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        {/*<CloseUpPage />*/}
        <HeaderBar />
        <div id={'app-content'}>
          <HorizontalCarousal />
          <Masonry />
          <FileUpload />
          <DropDown />
        </div>
      </AppLayout>
    );
  }
}

export default connect(null, null)(App);
