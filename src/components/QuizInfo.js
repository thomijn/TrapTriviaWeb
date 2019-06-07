import React from "react";
import QuestionCount from "../components/QuestionCount";
import PropTypes from "prop-types";
import Score from "../components/Score";
import StyledProgressbar from "./StyledProgressbar"
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

let percentage = 0

class QuizInfo extends React.Component {

  componentDidMount() {
    
  }
  
  onNextquestion(){
    
  }
  
  componentWillUnmount() {
    // clearInterval(this.interval);
    // percentage = 0
    // return percentage
  }

  render(){
    const { classes } = this.props;
    return(

       <Paper square className={classes.root} elevation={4}>
      <QuestionCount counter={this.props.questionId} total={this.props.questionTotal} />
      <Score score={this.props.score} />
      <StyledProgressbar percentage={this.props.percentage}/>
    </Paper>
    )
  }
}
  
  

QuizInfo.propTypes = {
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};


export default withStyles(styles)(QuizInfo);
