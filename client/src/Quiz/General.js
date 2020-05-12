import React, { PureComponent, Component } from 'react';
import "./assets/style.css";
import ReactDOM from 'react-dom'
import quizService from './quizService'
import QuestionBox from './components/QuestionBox';
import Result from './components/Result'
import {Button} from './quizService/Button'
import TimeUp from './TimeUp'



class QB2 extends Component{
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
        viewer:true,
        baser:false,
        runner:false,
        score_science:0,
        type:'',
    };
     
        

    getQuestions=()=>{
        quizService().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };

    playAgain=()=>{
        
        this.setState({
        responses:0,
        score:0, 
    
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

    componentDidMount (){
        this.getQuestions();
      
       
    }

    clock=()=>{
        if(this.state.runner){
            const startTime = 0;
            this.timer = setInterval(() => {
              this.setState({ runningTime: 0 });
            });
           }
    }

    computeAnswer=(answer,correctAnswer,type)=>{
        if(answer===correctAnswer){
            if(type=="science"){
                this.setState({score_science:3})
            }
          
            this.setState({
                score:this.state.score +4
            });
        }
        if(answer!==correctAnswer){
            this.setState({
                score:this.state.score -1
            });
        } if(answer!==correctAnswer){
            this.setState({
                score:this.state.score -1
            });
        }
        if(this.state.responses==5){
           
          this.clock();
            this.setState({
          runner:true,
            });
        }
        this.setState({
            responses:this.state.responses<5? this.state.responses+1 :5
                });
               
    }



    

    render(){
         const { runningTime } = this.state; 
       
    return(

        <>
        {this.state.viewer?(<div className='container1'>
    
    {this.state.responses!==5?(<><div className='h1'>General Quiz !!!</div><p>Time elapsed: {runningTime/1000}seconds</p>
   
     <Button onClick={this.play}>{this.state.Toggler}</Button></>):null}
    
    {this.state.play>0 &&
    this.state.questionBank.length>0 && 
    this.state.responses < 5 &&
    this.state.questionBank.map(({question,answers,correct,questionId,type})=>(
      <QuestionBox  question={question} options={answers} type={type} key={questionId} selected={answer=>this.computeAnswer(answer,correct,type)}/>
    ))}
          {this.state.responses === 5?(<><Result score={this.state.score} playAgain={this.playAgain} type={this.state.type} baser={this.state.baser}  runningTime={runningTime} /> </>):null}
        </div>):null}


    </>
    );
}
}

export default QB2