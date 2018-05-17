import React, { Component } from 'react';
import placeholder from '../images/placeholder.png';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CloseUpPageLayout = styled.div`
  background: url(${placeholder}) no-repeat center center fixed;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  #close-up-header {
    width: 80%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
  }
  #close-up-wrapper {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 72px;
  }
  #close-up-content {
    padding-top: 2%;
    padding-bottom: 2%;
    border-radius: 8px;
    background-color: white;
  }
  #close-up-image {
    background-size: auto;
    display: inline-block;
    width: 100%;
    max-height: 800px;
    border-radius: 8px;
  }
  #close-up-left-partition,
  #close-up-right-partition {
    vertical-align: top;
    display: inline-block;
    width: 38%;
    padding-left: 2%;
    padding-right: 2%;
    max-height: 800px;
    h1 {
      margin-top: 0;
    }
  }
  #close-up-content {
    padding-top: 2%;
    padding-bottom: 2%;
    border-radius: 8px;
    background-color: white;
  }
  #close-up-comments {
    width: 50%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

class CloseUpPage extends Component {
  state = {
    image: 'https://placeimg.com/480/460/any',
    heading: 'Heading',
    description: 'Description',
    author: 'Author',
    comments: [
      {
        user: '1',
        comment: '1'
      },
      {
        user: '2',
        comment: '2'
      },
      {
        user: '3',
        comment: '3'
      },
      {
        user: '4',
        comment: '4'
      },
      {
        user: '5',
        comment: '5'
      },
      {
        user: '6',
        comment: '6'
      },
      {
        user: '7',
        comment: '7'
      },
      {
        user: '8',
        comment: '8'
      },
      {
        user: '9',
        comment: '9'
      },
      {
        user: '10',
        comment: '10'
      },
      {
        user: '11',
        comment: '11'
      },
      {
        user: '12',
        comment: '12'
      },
      {
        user: '13',
        comment: '13'
      }
    ]
  };

  render() {
    const { comments, image, heading, description, author } = this.state;
    return (
      <CloseUpPageLayout {...this.state}>
        <div id={'close-up-wrapper'}>
          <div id={'close-up-content'}>
            <div id={'close-up-left-partition'}>
              <img src={image} id={'close-up-image'} />
            </div>
            <div id={'close-up-right-partition'}>
              <h1>{heading}</h1>
              <h3>{description}</h3>
              <h5>Pin by {author}</h5>
              <ul id={'close-up-comments'}>{comments.map((el) => <li>{el.comment}</li>)}</ul>
            </div>
          </div>
        </div>
      </CloseUpPageLayout>
    );
  }
}

export default connect(null, null)(CloseUpPage);
