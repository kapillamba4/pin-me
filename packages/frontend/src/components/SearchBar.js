import React, { Component } from 'react';
import styled from 'styled-components';
const SearchWrapper = styled.span`
  line-height: 38px;
  border: 0;
  margin-left: 24px;
  #search-text-box {
    height: 38px;
    width: 240px;
    border: 0;
    border-radius: 4px 0 0 4px;
    padding-left: 8px;
  }

  #search-button {
    height: 38px;
    width: 40px;
    border-radius: 0 4px 4px 0;
    transition: background-color 0.4s ease;
    cursor: pointer;
    background-color: rgba(38, 50, 56, 0.8);
    border: 0;
    font-size: 1rem;
    color: white;
    &:hover {
      background-color: rgba(0, 150, 136, 0.8);
    }
  }
`;

export default class SearchBar extends Component {
  render() {
    return (
      <SearchWrapper {...this.props}>
        <input type="text" id={'search-text-box'} placeholder="Search for your next favourite thing" />
        <input title="Search" id={'search-button'} value="S" type="submit" className="button" />
      </SearchWrapper>
    );
  }
}
