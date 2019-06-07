import React from "react";
import Confetti from "react-confetti";


function Confettis(props) {
  
    return <Confetti className="confetti" numberOfPieces={750} run={props.ConfettiShow} width={window.innerWidth} height={window.innerHeight} />;
  }


export default Confettis;
