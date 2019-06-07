import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from "@material-ui/core";

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        fullWidth
        open={true}
        maxWidth="sm"
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Instructions</DialogTitle>
        <DialogTitle id="simple-dialog-title">- Tee questions for the game are true or false questions</DialogTitle>
        <DialogTitle id="simple-dialog-title">- You answer by standing on either the true or false side </DialogTitle>
        <DialogTitle id="simple-dialog-title">- You have 10 seconds to answer</DialogTitle>
        <DialogTitle id="simple-dialog-title">- If you can complete all the questions you win!</DialogTitle>
        <DialogTitle id="simple-dialog-title">- If you answer incorrectly you have to start over</DialogTitle>
      </Dialog>
    );
  }
}

export default SimpleDialog;
