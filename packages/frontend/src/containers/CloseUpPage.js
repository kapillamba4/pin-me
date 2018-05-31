import React, { Component } from 'react';
import placeholder from '../images/placeholder.png';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

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
    margin-top: 62px;
  }
  #close-up-content {
    padding: 2%;
    border-radius: 8px;
    height: 90%;
    background-color: white;
  }
  #close-up-image {
    background-size: auto;
    display: inline-block;
    width: 100%;
    max-height: 600px;
    border-radius: 8px;
  }
  #close-up-left-partition,
  #close-up-right-partition {
    vertical-align: top;
    display: inline-block;
    width: 46%;
    padding: 2%;
    height: 82%;
    overflow-y: auto;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
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
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #comment-wrapper {
    margin-bottom: 12px;
    #comment-avatar {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      border: 4px solid white;
      height: 36px;
      width: 36px;
      vertical-align: top;
    }
    #comment-box {
      display: inline-block;
      vertical-align: top;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      border: 4px solid white;
      width: calc(100% - 84px);
      margin-left: 12px;
      height: auto;
    }
  }
  .back-button {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid #eee;
    position: relative;
    margin: 2%;
    h2 {
      background: #eee;
      display: block;
      width: 112px;
      margin-top: -20px;
      margin-left: 20px;
      height: 40px;
      line-height: 40px;
      color: white;
      text-align: left;
      margin-bottom: 0;
    }
    &:hover {
      h2 {
        color: #fcfbf7;
        transition: all 200ms linear;
      }
      cursor: pointer;
    }
  }
 
  @media only screen and (max-width: 768px) {
    #close-up-left-partition,
    #close-up-right-partition {
      display: block;
      width: 94%;
      margin-left: auto;
      margin-right: auto;
    }
    #close-up-wrapper {
      flex-direction: column;
      width: 98%;
    }
    #close-up-content {
      height: auto;
      margin: 4%;
    }
    #close-up-wrapper {
      margin: 0;
    }
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

  async componentDidMount() {
    // TODO
  }

  render() {
    const { comments, heading, description, author } = this.state;
    return (
      <CloseUpPageLayout {...this.state}>
        <div id={'close-up-wrapper'}>
          <div id={'close-up-content'}>
            <div className="back-button" onClick={this.props.history.goBack}>
              <h2>Go Back</h2>
            </div>
            <div id={'close-up-left-partition'}>
              <img src={`${process.env.REACT_APP_SERVER}pins/download?pin=${this.props.match.params.id}`} id={'close-up-image'} alt="" />
            </div>
            <div id={'close-up-right-partition'}>
              <h1>{this.props.match.params.id}</h1>
              <h3>{description}</h3>
              <h5>Pin by {author}</h5>
              <ul id={'close-up-comments'}>
                {comments.map((el, id) => (
                  <div id={'comment-wrapper'} key={id}>
                    <img id={'comment-avatar'} src="https://placeimg.com/480/460/any" alt="" />
                    <div id={'comment-box'}>
                      <div id={'comment-head'}>
                        <small id={'comment-name'}>John Doe</small>
                      </div>
                      <div id={'comment-content'}>
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium
                          vitae, praesentium optio
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CloseUpPageLayout>
    );
  }
}

export default connect(null, null)(CloseUpPage);
