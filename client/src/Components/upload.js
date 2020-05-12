import React, { Component } from 'react'
import Axios from 'axios';

export class upload extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            title:'',
            content:''
        }
    }
    handleSubmit=()=>{
        var url='http://localhost:8000/api/assignment/';
        let d=new Date();
      
        let year=d.getFullYear();
        let cdate=d.getDate();
        let month=d.getMonth()+1;
        if(cdate.toString().length==1 )
        {
            cdate='0'+cdate;
        }
        if(month.toString().length==1 )
        {
            month='0'+month;
        }
        console.log({'task':this.state.title,'content':this.state.content,'submission_date':cdate+'-'+(month)+'-'+year});
        Axios.post(url,{'task':this.state.title,'content':this.state.content,'submission_date':cdate+'-'+(month)+'-'+year}).then(res => {
            console.log(res);
            console.log(res.error);
        })
        this.props.history.push('/teacher');
    }
    handleChange=(e)=>{
        let name=e.target.name;
        this.setState({[name]:e.target.value});
    }
    render() {
        return (
            <div>
                <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                
                <div>
                    <a class="logo" href="">STUTER</a>
                </div>                 
                <div class="buy-button">
                    <a href="" target="" class="btn btn-primary">Logout</a>
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
                        <li><a href="/SignIn">Home</a></li>
                        
                    </ul>
                    
                </div>
            </div>
        </header>
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="p-4 rounded shadow" style={{overflow:'hidden'}}>
                            <h5 class="text-md-left text-center">Assignment Detail :</h5>

                            <div class="mt-3 text-md-left text-center d-sm-flex">
                                
                                
                            </div>

                            <form>
                                <div class="row mt-4">
                                    <div class="col-md-12">
                                        <div class="form-group position-relative">
                                            <label> Name :</label>
                                          
                                            <input onChange={this.handleChange} name="title" id="name" type="text" class="form-control pl-5" />
                                        </div>
                                    </div>
                                   
                                    <div class="col-md-12">
                                        <div class="form-group position-relative">
                                            <label>Assignment content:</label>
                                            <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                                            <textarea onChange={this.handleChange} name="content" id="content" rows="4" class="form-control pl-5" placeholder="Description :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input id="submit" onClick={this.handleSubmit} name="send" class="btn btn-primary" value="Save Changes"/>
                                    </div>
                                </div>
                            </form>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default upload
