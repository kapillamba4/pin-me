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
import { Switch, Route } from 'react-router-dom';
import pin from './actions/pin';

const AppLayout = styled.div`
  left: 50%;
  margin-top: 80px;
  #app-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1360px;
  }
`;

const AppContent = (props) => (
  <AppLayout>
    <div id={'app-content'}>
      <HeaderBar />
      {React.createElement('div', { style: { height: '34px' } })}
      <FileUpload uploadPin={props.addPin} />
      <HorizontalCarousal />
      <Masonry />
      <DropDown title={'Select location'} />
    </div>
  </AppLayout>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AppContent} extraProps={this.props} />
        <Route exact path="/pin/:id" component={CloseUpPage} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({ ...state.pins });
const matchDispatchToProps = dispatch =>
  bindActionCreators({ ...pin }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(App);
