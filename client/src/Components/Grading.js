import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
export class Grading extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            gradpost:null,
            marks:null,
        }
    }
    componentDidMount() {
        var url='http://localhost:8000/api/assignment_id/';
        
        Axios.post(url,{'id':this.props.match.params.grad_id}).then(res => {
            this.setState({gradpost:res.data});
            console.log(res.data);
            console.log(res.error);
            console.log('helllo');

            
        })
    }
    handleChange=(e)=> 
    {
        let name=e.target.name;
        this.setState({marks:e.target.value})  ;
    }
    handleSubmit=()=>{

        var url='http://localhost:8000/api/teacher_correct/';
        Axios.post(url,{'id':this.props.match.params.grad_id,'marks':this.state.marks}).then(res => {
            console.log(res.error);
            console.log(res.data);
        })
        this.props.history.push('/teacher');
    }
    render() {
        return (
            <div>
                 <header id="topnav" class="defaultscroll sticky bg-white">
            <div class="container">
                
                <div>
                    <a class="logo" href="">Task</a>
                </div>                 
                <div class="buy-button">
                    <a  class="btn btn-primary">Logout</a>
                </div>
                
                <div class="menu-extras">
                    <div class="menu-item">
                        
                        <a class="navbar-toggle">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        
                    </div>
                </div>
        
                <div id="navigation">
                      
                    <ul class="navigation-menu">
                        <li><Link to="/SignIn">Home</Link></li>
                        
                       
                    </ul>
                    
                </div>
            </div>
        </header>
                {
                    this.state.gradpost?<div>
                        <section class="section" >
                    <div class="container">
                        <div class="row text-center">
                        
                            <div class="col-lg-8 col-md-7">
                                <div class="">
                                    <div class="blog position-relative overflow-hidden shadow rounded">
                                        
                                        <div class="content p-4">
                                        
                                            <p class="text-muted mt-3">{this.state.gradpost.content} </p>
                                            
                                            <p class="text-muted">{this.state.gradpost.ans} </p>
                                            
                                        </div>
                                    </div>
                                </div>
                               
                                
                          
                            <div class="mt-4 pt-2 p-4 shadow rounded" style={{overflow:'hidden'}}>
                                
                               
                                    <div class="row">
                                        
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Marks Obatined</label>
                                                <input name="marks" id="name" type="number" onChange={this.handleChange} class="form-control pl-5" placeholder="Enter NUmber"></input>
                                                   </div>
                                        </div>

                                        

                                        

                                        <div class="col-md-12">
                                            <div class="send">
                                            <button onClick={this.handleSubmit} class="btn btn-primary w-100">Assign Marks</button>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                    </div>:<h2>No data to show</h2>
                }
            </div>
        )
    }
}

export default Grading
