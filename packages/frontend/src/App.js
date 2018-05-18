import React, { Component, Fragment } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CloseUpPage from './containers/CloseUpPage';
import HeaderBar from './containers/HeaderBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/*<CloseUpPage />*/}
        <HeaderBar/>
      </Fragment>
    );
  }
}

export default connect(null, null)(App);
