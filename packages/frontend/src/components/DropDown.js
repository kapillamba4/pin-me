import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import styled from 'styled-components';

const DropDownLayout = styled.span`
  #click-HOC {
    min-width: 220px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .dd-header {
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 36px;
    width: 160px;
    border: 1px solid rgb(237, 237, 237);
    padding-left: 16px;
  }

  i {
    font-size: x-large;
    margin-left: auto;
    cursor: pointer;
  }

  .dd-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    > .dd-list-item {
      display: flex;
      align-items: center;
      margin: 0;
      padding-left: 16px;
      border-radius: 4px;
      border: 1px solid rgb(237, 237, 237);
      height: 36px;
      width: 160px;
      cursor: pointer;
    }
  }
`;

export default class DropDown extends Component {
  state = {
    list: [
      {
        id: 0,
        title: 'A',
        selected: false,
        key: 'key'
      },
      {
        id: 1,
        title: 'B',
        selected: false,
        key: 'key'
      },
      {
        id: 2,
        title: 'C',
        selected: false,
        key: 'key'
      },
      {
        id: 3,
        title: 'D',
        selected: false,
        key: 'key'
      },
      {
        id: 4,
        title: 'E',
        selected: false,
        key: 'key'
      },
      {
        id: 5,
        title: 'F',
        selected: false,
        key: 'key'
      }
    ],
    listOpen: false,
    default: false,
    headerTitle: this.props.title
  };

  handleClickOutside() {
    if (this.state.listOpen) {
      this.setState({
        listOpen: false
      });
    }
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen
    }));
  }

  itemSelected(e) {
    this.setState({
      default: true,
      listOpen: !this.state.listOpen,
      headerTitle: e.target.innerText
    });
  }

  render() {
    const { listOpen, headerTitle, list } = this.state;
    return (
      <DropDownLayout>
        <ClickOutside id={'click-HOC'} onClickOutside={::this.handleClickOutside}>
          <div className="dd-header" onClick={::this.toggleList}>
            <div className="dd-header-title">
              {headerTitle}&#160;&#160;&#160;
              {listOpen && <i className="fa fa-angle-up fa-2x" />}
              {!listOpen && <i className="fa fa-angle-down fa-2x" />}
            </div>
          </div>

          {listOpen && (
            <ul className="dd-list">
              {list.map((item) => (
                <li className="dd-list-item" key={item.id} onClick={::this.itemSelected}>
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </ClickOutside>
      </DropDownLayout>
    );
  }
}
