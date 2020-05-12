import React from "react";
import ".././assets/style.css";
import Quizbee from "../index1";
import {Button} from '.././quizService/Button'


const Result = ({score, playAgain,runningTime}) => (

 
 
   <div className="score-board">
    <div className="score">You scored {score} / 40 marks!
     
    </div>
    <div className="title">WELL DONE YOU HAVE FINISHED THE QUIZ</div>
   
    <a className="playBtn" href="/">
      Play again!
    </a>

    <div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>

   

    
    </div>

);

export default Result;
