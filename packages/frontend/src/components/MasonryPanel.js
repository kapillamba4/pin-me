import React, { Component } from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';

const PanelLayout = styled.div`
  width: 100%;
  overflow-y: hidden;
`;

export default class MasonryPanel extends Component {
  render() {
    const { data } = this.props;

    console.log(this.props);
    return (
      <PanelLayout>
        {this.props.data.map((imageData, id) => <ImageCard {...this.props} key={id} imageData={imageData} />)}
      </PanelLayout>
    );
  }
}
