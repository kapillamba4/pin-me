import React, { Component } from 'react';
import styled from 'styled-components';
import ClickOutside from 'react-click-outside';
import SubmitButton from './SubmitButton';

const AuthModal = styled.div`
  display: flex;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 50%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.2);
  transition-property: transform;
  transform: translateY(-30px);
  transition-duration: 0.3s;
  color: white;
  justify-content: center;
  align-items: center;
  z-index: 100;
  #click-HOC {
    background-color: white;
    width: 90%;
    max-width: 460px;
    height: auto;
    border-radius: 8px;
    border: 1px solid #586165;
    overflow: hidden;
  }
  .auth-switcher > ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-grow: 1;
    padding: 0;
    margin: 0;
    li {
      text-align: center;
      width: 50%;
      padding-top: 16px;
      padding-bottom: 16px;
      cursor: pointer;
    }

    li:nth-child(1) {
      background-color: ${(props) => (props.authPopup === 'register' ? '#586165' : 'white')};
      color: ${(props) => (props.authPopup === 'register' ? 'white' : 'black')};
    }

    li:nth-child(2) {
      background-color: ${(props) => (props.authPopup === 'login' ? '#586165' : 'white')};
      color: ${(props) => (props.authPopup === 'login' ? 'white' : 'black')};
    }
  }

  .field {
    display: flex;
    justify-content: center;
  }

  input {
    height: 38px;
    width: 240px;
    border: 0;
    border-radius: 4px 4px;
  }
`;

export default class AuthPopup extends Component {
  state = {
    authPopup: this.props.authPopup,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  toggleState(e) {
    if (e.target.innerText === 'Sign in' && this.state.authPopup !== 'register') {
      return;
    } else if (e.target.innerText === 'New account' && this.state.authPopup !== 'login') {
      return;
    }

    this.setState({
      authPopup: this.state.authPopup === 'login' ? 'register' : 'login'
    });
  }

  handleClickOutside() {
    this.props.setAuthPopup(null);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.authPopup === 'login') {
      this.props.doLogin(this.state);
    } else {
      this.props.doRegister(this.state);
    }

    return false;
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  handleFirstNameChange(evt) {
    this.setState({
      firstName: evt.target.value
    });
  }

  handleLastNameChange(evt) {
    this.setState({
      lastName: evt.target.value
    });
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  render() {
    const { username, password, firstName, lastName, email, authPopup } = this.state;
    return (
      <AuthModal {...this.state}>
        <ClickOutside id={'click-HOC'} onClickOutside={::this.handleClickOutside}>
          <div className={'auth-switcher'}>
            <ul>
              <li onClick={::this.toggleState}>Sign in</li>
              <li onClick={::this.toggleState}>New account</li>
            </ul>
          </div>

          {authPopup === 'login' ? (
            <div className={'auth-login'}>
              <form className={'auth-form'} onSubmit={::this.handleSubmit}>
                <p className="field">
                  <input
                    id="login-username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={::this.handleUsernameChange}
                  />
                </p>

                <p className="field">
                  <input
                    id="login-password"
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={::this.handlePasswordChange}
                  />
                </p>

                <p className="field">
                  <SubmitButton value={'Login'} />
                </p>
              </form>
            </div>
          ) : null}

          {authPopup === 'register' ? (
            <div className={'auth-register'}>
              <form className={'auth-form'} onSubmit={::this.handleSubmit}>
                <p className="field">
                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={::this.handleFirstNameChange}
                    placeholder="First name"
                  />
                </p>

                <p className="field">
                  <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={::this.handleLastNameChange}
                    placeholder="Last name"
                  />
                </p>

                <p className="field">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={::this.handleEmailChange}
                    placeholder="Email"
                  />
                </p>

                <p className="field">
                  <input
                    id="register-username"
                    type="text"
                    value={username}
                    onChange={::this.handleUsernameChange}
                    placeholder="Username"
                  />
                </p>

                <p className="field">
                  <input
                    id="register-password"
                    type="password"
                    value={password}
                    onChange={::this.handlePasswordChange}
                    placeholder="Password"
                  />
                </p>

                <p className="field">
                  <SubmitButton value={'Register'} />
                </p>
              </form>
            </div>
          ) : null}
        </ClickOutside>
      </AuthModal>
    );
  }
}
