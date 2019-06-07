import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Confettis from "./Confetti"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Result(props) {
  const { classes } = props;
  return (
    <Grid container>
    <Confettis ConfettiShow={props.ConfettiShow}></Confettis>
      <Grid item sm={6}>
        <Paper square className={classes.root} elevation={4}>
          <Typography variant="h5">
            End result <br />
            <hr />
          </Typography>
          <Typography variant="h5">
            <strong>{props.quizResult}</strong>!
          </Typography>
          <hr />
          <Button
            variant="contained"
            color="primary"
            onClick={props.onTryAgain}
          >
            PLAY AGAIN
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Result);
