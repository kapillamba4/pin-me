import React, { Component } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import AuthPopup from '../components/AuthPopup';

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  border-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 4px -4px rgba(0, 0, 0, 0.75);
  line-height: 20px;
  padding-left: 8px;
  padding-right: 8px;
  z-index: 100;
  #auth-buttons {
    margin-left: auto;
    margin-right: 12px;
  }
  #drag-image-helper-label {
    font-size: 1rem;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.4);
  }
`;

class HeaderBar extends Component {
  doLogin(credentials) {
    this.props.login(credentials);
  }

  doRegister(credentials) {
    this.props.register(credentials);
  }

  doLoginPopup() {
    this.props.openLoginPopup();
  }

  doRegisterPopup() {
    this.props.openRegisterPopup();
  }

  doLogout() {
    this.props.logout();
  }

  setAuthPopup(value) {
    switch (value) {
      case 'login':
        this.props.openLoginPopup();
        break;
      case 'register':
        this.props.openRegisterPopup();
        break;
      default:
        this.props.closePopup();
        break;
    }
  }

  render() {
    const { authPopup, loggedIn } = this.props;
    return (
      <HeaderLayout>
        {authPopup ? (
          <AuthPopup
            setAuthPopup={::this.setAuthPopup}
            doLogin={::this.doLogin}
            doRegister={::this.doRegister}
            {...this.props}
          />
        ) : null}
        <Logo type={'0'} height={'40'} />
        <Button fontSize={'1.225rem'} fontWeight={'200'} text={'Home'} />
        <Button fontSize={'1.225rem'} fontWeight={'200'} text={'Discover'} />
        <Button fontSize={'1.225rem'} fontWeight={'200'} text={'Popular'} />
        <SearchBar />
        <span id={'auth-buttons'}>
          {!loggedIn && (
            <Button
              fontSize={'1.225rem'}
              fontWeight={'200'}
              text={'Sign up'}
              isColored={true}
              isOutlined={false}
              onClick={::this.doRegisterPopup}
            />
          )}
          {!loggedIn && (
            <Button
              fontSize={'1.225rem'}
              fontWeight={'200'}
              text={'Login'}
              isColored={false}
              isOutlined={true}
              onClick={::this.doLoginPopup}
            />
          )}
          {loggedIn && <span id={'drag-image-helper-label'}>Drag an Image to Upload </span>}
          {loggedIn && (
            <Button
              fontSize={'1.225rem'}
              fontWeight={'200'}
              text={'Logout'}
              isColored={true}
              isOutlined={false}
              onClick={::this.doLogout}
            />
          )}
        </span>
      </HeaderLayout>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.auth });
const matchDispatchToProps = (dispatch) => bindActionCreators({ ...actions.auth }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(HeaderBar);
