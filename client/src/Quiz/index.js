import React, { PureComponent, Component } from 'react';
import "./assets/style.css";

import Quizbee from './index1'

import Home from './Home'

class Quizbee1 extends Component{
    state={
        questionBank:false,
       
    };


    physics=()=>{
        this.setState({
            questionBank:true
        });
       
    }


    render(){     
        return(
            
            <Home/>
        
        );
    }
}

export default Quizbee