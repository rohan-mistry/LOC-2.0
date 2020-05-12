import React, { PureComponent, Component } from 'react';
import "./assets/style.css";
import ReactDOM from 'react-dom'
import quizService from './quizService'
import QuestionBox from './components/QuestionBox';
import Result from './components/Result'
import {Button} from './quizService/Button'


class QB1 extends Component{
    state={
        questionBank:[],
        score:0,
        responses:0,
        work:null,
        play:false,
        render:-1,
        Toggler:'lets begin',
         status: false,
      runningTime: 0,
 
    };
     
        handleReset = () => {
            this.setState({ runningTime: 0, status: false });
          };

    getQuestions=()=>{
        quizService().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };

    playAgain=()=>{
        this.getQuestions();
        this.setState({
            score:0,
            responses:0,
             });
             
    }
    chaluer=()=>{
      
        this.setState({
         chalu:true
        })
    }
    chaluer1=()=>{
      
        this.setState({
         chalu1:true
        })
    }
    chaluer2=()=>{
      
        this.setState({
         chalu2:true
        })
    }
    play=()=>{
        
        this.setState(state => {
            if (state.status) {
              clearInterval(this.timer);
            } else {
              const startTime = Date.now() - this.state.runningTime;
              this.timer = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime });
              });
            }
            return { status: !state.status };
          });

        this.setState({play: !this.state.play})
        if(this.state.play===false){
            this.setState({
                Toggler:'Click to close'
            });
        }
        if(this.state.play===true){
            this.setState({
                Toggler:'Click to resume'
            });
        }
    }

    componentDidMount(){
        this.getQuestions();
    }

    computeAnswer=(answer,correctAnswer)=>{
        if(answer===correctAnswer){
            this.setState({
                score:this.state.score +4
            });
        }
        if(answer!==correctAnswer){
            this.setState({
                score:this.state.score -1
            });
        }
        if(this.state.score===20){
            this.setState({
                work:"Excellent"
            });
        }
        this.setState({
            responses:this.state.responses<5? this.state.responses+1 :5
                });
    }


    render(){
         const { runningTime } = this.state; 
    return(
<div className='container1'>
        <div className='h1'>Physics Quiz !!!</div><p>Time elapsed: {runningTime/1000}seconds</p>
         <Button onClick={this.play}>{this.state.Toggler}</Button>
      
      {this.state.play>0 &&
      this.state.questionBank.length>0 && 
      this.state.responses < 5 &&
      this.state.questionBank.map(({question,answers,correct,questionId})=>(
          <QuestionBox  question={question} options={answers} key={questionId} selected={answer=>this.computeAnswer(answer,correct)}/>
      ))}
      {this.state.responses === 5?(<><Result score={this.state.score} playAgain={this.playAgain} work={this.state.work} /> </>):null}
  
      </div>
    );
}
}

export default QB1