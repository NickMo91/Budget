import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { DropzoneDialog } from 'material-ui-dropzone';

class FileInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
      open: false
    });

    const data = new FormData();
    data.append('file', files[0]);
    axios.post('api/file', data, {}).then(res => {
      console.log(res.statusText);
    });
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <h3>Create/Upload Transaction(s) Here</h3>
        <Button onClick={this.handleOpen}>Upload Transactions CSV</Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave}
          acceptedFiles={['text/csv']}
          maxFileSize={5000000}
          onClose={this.handleClose}
        />
      </Paper>
    );
  }
}

export default FileInputForm;
