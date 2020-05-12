import React, { PureComponent, Component } from 'react';
import "./assets/style.css";
import ReactDOM from 'react-dom'
import quizService from './quizService'
import QuestionBox from './components/QuestionBox';
import Quizbee from './index1'
import {Button} from './quizService/Button'
import { Route, BrowserRouter } from 'react-router-dom'


class kid extends Component{
    render(){     
    return(
        <div className="container">
    
            <h1 text-align='center'>Welcome to JEE Mock-Up</h1>
            <Sub-title>Choose your field</Sub-title>
            <Button>Physics</Button>
           
           <Button>Physics</Button>
           <Button>Physics</Button>
       </div>
    );
}
}

export default kid