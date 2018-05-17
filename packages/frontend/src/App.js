import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        pin-me
      </div>
    );
  }
}

export default connect(null, null)(App);
