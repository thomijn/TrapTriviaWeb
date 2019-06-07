import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";



function decodeUTF(string){
  let parser = new DOMParser;
  let dom = parser.parseFromString(
    '<!doctype html><body>'+string, 'text/html'
  );
  return dom.body.textContent;
}


function Question(props) {



  
let answerclass

  if(props.answerCorrect === true){
    answerclass = "answercorrect"
  } else if(props.answerFalse === true){
    answerclass = "answerfalse"
  } else {
    answerclass = "answer"
  }
  
  
  return (
    <div>
      <Grid item xs={12}>
        <div  className={
                     answerclass
                    }>
          <Typography align="center"  variant="h3" component="h2">

            { decodeUTF(props.content) }
          </Typography>
        </div>
      </Grid>
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default (Question);
