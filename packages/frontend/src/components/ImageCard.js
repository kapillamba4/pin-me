import React, { Component } from 'react';
import styled from 'styled-components';
import 'img-2/dist/img-2';
import placeholder from '../images/placeholder.png';
import sizeMe from 'react-sizeme';
import plusCursor from '../../src/images/plus_cursor.png';
import { Link, withRouter } from 'react-router-dom';

const Card = styled.div`
  margin-top: 10px;
  #image-card,
  #image-card-wrapper {
    display: block;
    width: 100% !important;
    a {
      color: inherit;
    }
    #download-image-btn,
    #avatar-username,
    #push-pin-btn,
    #share-btn {
      display: none;
    }
    &:hover {
      cursor: url(${plusCursor}) 20 15, pointer;
      #image-card-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: ${(props) => `${Math.floor(props.imageData.aspectRatio * props.size.width)}px !important`};
        z-index: 1;
        border-radius: 10px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.4)),
          linear-gradient(to top, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.4));
      }
      #avatar-username {
        display: inline;
        position: absolute;
        bottom: 44px;
        left: 4px;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 6px;
        border-radius: 10px;
        > #avatar-image {
          display: inline-block;
          width: 3.25rem;
          height: 3.25rem;
          z-index: 2;
          border-radius: 50%;
          vertical-align: middle;
        }
        > #creator-username {
          display: inline-block;
          padding-left: 4px;
          color: black;
          font-size: 1.25rem;
          vertical-align: middle;
        }
        &:hover {
          cursor: pointer;
        }
      }

      #push-pin-btn,
      #share-btn,
      #download-image-btn {
        display: block;
        position: absolute;
        text-align: center;
        z-index: 2;
        width: 2.25rem;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.6);
        font-size: 2.25rem;
        padding: 6px;
        margin: 4px;
        &:hover {
          width: 2.5rem;
          font-size: 2.5rem;
          cursor: pointer;
        }
      }

      #push-pin-btn {
        top: 4px;
        right: 4px;
      }

      #share-btn {
        top: 4px;
        left: 4px;
      }

      #download-image-btn {
        right: 4px;
        bottom: 44px;
      }
    }
    height: ${(props) => `${Math.floor(props.imageData.aspectRatio * props.size.width)}px !important`};
    border-radius: 10px !important;
    .img-2 {
      width: 100% !important;
      height: ${(props) => `${Math.floor(props.imageData.aspectRatio * props.size.width)}px !important`};
      border-radius: 10px;
      object-fit: contain;
    }
  }
  #image-card-title {
    text-align: center;
    font-size: 1.25rem;
  }
`;

export default withRouter(sizeMe()(
  class ImageCard extends Component {
    downloadImage(evt) {
      evt.preventDefault();
      window.href = 'http://localhost:9000/pins/download?pin=1';
      // this.props.downloadPin(this.props.imageData);
    }

    render() {
      console.log(this.props);
      const { id, width, height, title, creator_username } = this.props.imageData;
      return (
        <Card {...this.props}>
          <div id={'image-card-wrapper'}>

              <img-2
                id={'image-card'}
                src={`${process.env.REACT_APP_SERVER}pins/download?pin=${id}`}
                width={'100%'}
                height={'100%'}
                src-preview={placeholder}
              />

            <div id={'image-card-overlay'} onClick={() => this.props.history.push(`/pin/${id}`)} />
            <div id={'avatar-username'}>
              <img id={'avatar-image'} src={`https://api.adorable.io/avatars/285/${creator_username}`} />
              <span id={'creator-username'}>{creator_username}</span>
            </div>
            <a href={`${process.env.REACT_APP_SERVER}pins/download?pin=${id}`} target="_blank">
              <i className="fa fa-download" id={'download-image-btn'} aria-hidden="true" />
            </a>
            <i className="fa fa-map-pin" id={'push-pin-btn'} aria-hidden="true" />
            <i className="fa fa-share-alt" id={'share-btn'} aria-hidden="true" />
          </div>
          <h1 id={'image-card-title'}>{title}</h1>
        </Card>
      );
    }
  }
));
