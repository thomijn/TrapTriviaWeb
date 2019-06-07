import React from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

function Quiz(props) {
  return (
    <Grid
      direction="column"
      alignItems="stretch"
      justify="flex-start"
      container
      spacing={24}
    >
      <Grid item xs={12}>
        <Question content={props.question} answerFalse={props.answerFalse} answerCorrect={props.answerCorrect} />
      </Grid>
      <Grid item xs={12}>
        <Answer
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
          answercontent={props.answercontent}
        />
      </Grid>
    </Grid>
  );
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
