import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: 10
  }
});

function Start(props) {
  const { classes } = props;

  return (
    <div className="start">
      <Grid
        direction="column"
        alignItems="stretch"
        justify="flex-start"
        container
        spacing={24}
      >
        <Grid item xs={9}>
          <Paper square className={classes.root} elevation={4}>
            <Typography gutterBottom variant="h5" component="h2">
              <strong>TrapTrivia</strong>
            </Typography>
            <hr />
            <Typography component="p">
              Test your knowledge and climb up!
            </Typography>
            <hr />
            <Button
              variant="outlined"
              color="primary"
              onClick={props.handleClickOpenDialog}
            >
              Game instrutions
              <Icon className={classes.icon} fontSize="small">
                info_outlined
              </Icon>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper square className={classes.root} elevation={4}>
            <Typography gutterBottom component="p" variant="h5">
              Start a game!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={props.onStartGame}
            >
              START GAME
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Start);
