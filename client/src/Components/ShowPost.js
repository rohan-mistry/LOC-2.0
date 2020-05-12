import React, { Component } from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'

export class ShowPost extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            post:null,
            answer:''
        }
    }
    handleChange=(e)=>{
        let name=e.target.name;
        this.setState({[name]:e.target.value});
    }
    componentDidMount() {
        console.log("dububfbuebfuwb");
        
        var url='http://localhost:8000/api/assignment_id/';
        Axios.post(url,{'id':this.props.match.params.post_id}).then(res => {
            
              console.log('sucessful');
              console.log(res.data);
              this.setState({post:res.data})
          })
        console.log(this.props);console.log(this.props.match.params.post_id);
    }
    handleSubmit=()=>{
         var url='http://localhost:8000/api/assignment_ans/';
        Axios.post(url,{'ans':this.state.answer,'id':this.state.post.id}).then(res => {
            console.log(res);
            console.log(res.data);
        })
        this.props.history.push('/student');
    }
    render() {
        
        
        return (
            <div>
                 <header id="topnav" class="defaultscroll sticky bg-white">
            <div class="container">
                
                <div>
                    <a class="logo" href="">Tasks</a>
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
                    <div class="buy-menu-btn d-none">
                        <a  class="btn btn-primary">Logout</a>
                    </div>
                </div>
            </div>
        </header>
        { 
            this.state.post?<div>
                <section class="section" >
                    <div class="container">
                        <div class="row text-center">
                        
                            <div class="col-lg-8 col-md-7">
                                <div class="">
                                    <div class="blog position-relative overflow-hidden shadow rounded">
                                        
                                        <div class="content p-4">
                                        
                                            <p class="text-muted mt-3">{this.state.post.task} </p>
                                            
                                            <p class="text-muted">{this.state.post.content} </p>
                                            
                                        </div>
                                    </div>
                                </div>
                               
                                {/* <div class="p-4 shadow rounded mt-4 pt-2">
                                <h4 class="page-title pb-3">Submit Answer :</h4>
                                <ul class="media-list list-unstyled mb-0">
                                    { 
                                       
                                        this.state.comments ?
                                            this.state.comments.map(comment => {
                                                let d=new Date(comment.time);
                                                let date=d.getDate();
                                                let year=d.getFullYear();
                                                let month= d.getMonth();
                                                let hour=d.getHours();
                                                let minute=d.getMinutes();
                                                let ampm = hour >= 12 ? 'pm' : 'am';
                                                hour = hour % 12;
                                                hour = hour ? hour : 12;
                                                minute = minute < 10 ? '0'+minute : minute;
                                                let dateString=date+' '+months[date]+', '+year+' at '+hour+':'+minute+' '+ampm;
                                                return (
                                                    <li class="comment-desk mt-4">
                                                        <a href="#" class="float-right text-muted"><i class="mdi mdi-reply"></i>&nbsp; Reply</a>
                                                        <div class="commentor">
                                                            <a class="float-left pr-3" href="#">
                                                                <img src="" class="img-fluid avatar avatar-md-sm rounded-pill shadow" alt="img"/>
                                                            </a>
                                                            <div class="overflow-hidden d-block">
                                                <h4 class="media-heading mb-0"><a href="javascript:void(0)" class="text-dark">{comment.postedBy}</a></h4>
                                                                <small class="text-muted">{dateString}</small>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p class="text-muted font-italic p-3 bg-light rounded">" {comment.comment} "</p>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                                
                                            )
                                            
                                            : <h2>No comments to show</h2>
                                    }
                                    
                                </ul>
                            </div> */}
                          
                            <div class="mt-4 pt-2 p-4 shadow rounded" style={{overflow:'hidden'}}>
                                <h4 class="page-title pb-3">Submit a answer :</h4>
                               
                                    <div class="row">
                                        
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Submit Answer</label>
                                                <i class="mdi mdi-comment-outline ml-3 icons"></i>
                                                <textarea id="comment" onChange={this.handleChange}  placeholder="Your Comment" rows="5" name="answer" class="form-control pl-5" required=""></textarea>
                                            </div>
                                        </div>

                                        

                                        

                                        <div class="col-md-12">
                                            <div class="send">
                                            <button onClick={this.handleSubmit} class="btn btn-primary w-100">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>:<h2>Not available</h2>
        }
               
            </div>
        )
    }
}

export default ShowPost
