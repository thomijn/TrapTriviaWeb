import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styleanswer = {
  paddingBottom: 2,
  paddingTop: 2
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Answer(props) {
  const { classes } = props;
  const answercontenttrue = props.answercontent === "True";
  const answercontentfalse = props.answercontent === "False";
  return (
    <div style={{ textAlign: "center" }} className="answerOption">
      <Grid item xs={12}>
        <Paper square className={classes.root} elevation={4}>
          <Typography variant="h6">
            <p>Selected answer </p>
            <hr />
            <Grid
              item
              direction="row"
              alignItems="stretch"
              justify="flex-start"
              container
              spacing={24}
            >
              <Grid item xs={6}>
                 <Paper style={styleanswer} square elevation={4}>
                  <div
                    className={
                      answercontenttrue ? "selectedtrue" : "unselected"
                    }
                  >
                    <p>True</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6}>
              <Paper style={styleanswer} square elevation={4}>
                  <div
                    className={
                      answercontentfalse ? "selectedfalse" : "unselected"
                    }
                  >
                    <p>False</p>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Typography>
          <hr />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={props.onAnswerSelected}
          >
            SUBMIT
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

Answer.propTypes = {
  onAnswerSelected: PropTypes.func.isRequired
};

export default withStyles(styles)(Answer);
