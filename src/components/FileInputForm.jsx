import React from 'react';
import '../formstyle.css';
import axios from 'axios';

class FileInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  onClickHandler() {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    axios.post('api/file', data, {}).then(res => {
      console.log(res.statusText);
    });
  }

  render() {
    return (
      <form method='post' action='#' id='#'>
        <div className='form-group files'>
          <label>Upload Transactions CSV </label>
          <input type='file' onChange={this.onChangeHandler} />
        </div>
        <button type='button' onClick={this.onClickHandler}>
          Upload
        </button>
      </form>
    );
  }
}

export default FileInputForm;
