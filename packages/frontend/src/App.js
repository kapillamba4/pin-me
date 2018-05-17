import React, { Component, Fragment } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CloseUpPage from './containers/CloseUpPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CloseUpPage />
      </Fragment>
    );
  }
}

export default connect(null, null)(App);
