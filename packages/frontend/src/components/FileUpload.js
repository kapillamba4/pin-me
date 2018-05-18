import React, { Component } from 'react';
import DropZone from 'react-dropzone';

export default class FileUpload extends Component {
  state = {
    accept: 'image/*',
    files: [],
    dropZoneActive: false
  };

  constructor(props) {
    super(props);
  }

  onDragEnter() {}

  onDragLeave() {}

  onDrop(files) {
    this.setState({
      files,
      dropZoneActive: true
    });
  }

  applyMimeTypes(event) {
    this.setState({
      accept: event.target.value
    });
  }

  dragEnterDropZone(e) {
    const dt = e.dataTransfer;
    if (dt && dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') !== -1 : dt.types.contains('Files'))) {
      this.setState({
        dropZoneActive: true
      });
    }
  }

  dropFileDropZone(e) {
    const dt = e.dataTransfer;
    if (dt && dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') !== -1 : dt.types.contains('Files'))) {
      setTimeout(
        () =>
          this.setState({
            dropZoneActive: false
          }),
        4000
      );
    }
  }

  componentDidMount() {
    document.addEventListener('dragenter', this.dragEnterDropZone);
    document.addEventListener('drop', this.dropFileDropZone);
  }

  componentWillUnmount() {
    document.removeEventListener('dragenter', this.dragEnterDropZone);
    document.removeEventListener('drop', this.dropFileDropZone);
  }

  render() {
    const { accept, files, dropZoneActive } = this.state;
    const overlayStyle = {
      display: `${dropZoneActive ? 'flex' : 'none'}`,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      padding: '0',
      margin: '0',
      background: 'rgba(0,0,0,0.5)',
      textAlign: 'center',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 101
    };

    const uploaderStyle = {
      width: '60vw',
      height: '60vh',
      border: '4px dashed white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <DropZone
        disableClick
        className={'dropzone'}
        style={overlayStyle}
        accept={accept}
        onDrop={::this.onDrop}
        onDragEnter={::this.onDragEnter}
        onDragLeave={::this.onDragLeave}
      >
        {dropZoneActive && (
          <div className={'uploader'} style={uploaderStyle}>
            <i className="fa fa-upload fa-5x" />
            &#160;&#160;&#160;&#160;&#160;
            <span>Drag and drop or click to upload</span>
          </div>
        )}
      </DropZone>
    );
  }
}
