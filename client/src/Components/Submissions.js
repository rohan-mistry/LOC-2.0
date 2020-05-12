import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export class Submissions extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            submissions:null
        }
    }
    componentDidMount() {
        var url='http://localhost:8000/api/teacher_left/';
        Axios.get(url).then(res => { 
            this.setState({submissions:res.data});
            console.log(res.data);
            console.log(res.err);
            console.log(typeof(res.data));
        })
        
        
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
               {

                   this.state.submissions?<div style={ {padding:100} }>
                      <div class="col mt-4 pt-2">
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Submitted </h4>
                                    </div>

                                    <div class="p-4">
                                        <div class="table-responsive bg-white shadow rounded">
                                            <table class="table mb-0 table-center">
                                                <thead>
                                                   
                                                    <tr>
                                                    
                                                   <th scope="col">Name</th>
                                                    <th scope="col">Task</th>
                                                    
                                                   
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                    {
                                                        this.state.submissions.map(item => {
                                                            return(
                                                                
                                                                    <tr>
                                                                        <td>{item.name}</td>
                                                                        <th scope="row"><Link to={'/correct/' + item.id}>{ item.task }  </Link></th>
                                                                        
                                                                    </tr>
                                                               
                                                                
                                                            )
                                                        })
                                                    }   
                                                    
                                                         
                                                   
                                                    
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                   </div>:<h2>No submissions done</h2>
               }
                            
                           
            </div>
        )
    }
}

export default Submissions
