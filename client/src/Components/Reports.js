import React, { Component } from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'

export class Reports extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            result:[]
        }
        
    }
    componentDidMount() {
        var url='http://localhost:8000/api/marks_list/';
        Axios.get(url).then(res => {
            console.log(res.error);
            this.setState({result:res.data})
            console.log(res.data);
        })
    }
    
    render() {
        return (
            <div>
                <header id="topnav" class="defaultscroll sticky bg-white">
            <div class="container">
                
                <div>
                    <a class="logo" href="">Tasks</a>
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
                    <div class="buy-menu-btn d-none">
                        <a  class="btn btn-primary">Logout</a>
                    </div>
                </div>
            </div>
        </header>
        
     
        <section class="section bg-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12">
                       <div class="col md-12 col-lg-12 ">
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Results </h4>
                                    </div>

                                    <div class="p-4">
                                        <div class="table-responsive bg-white shadow rounded">
                                            <table class="table mb-0 table-center">
                                                <thead>
                                                   
                                                    <tr>
                                                    
                                                    <th scope="col">Task</th>
                                                    <th scope="col">Marks</th>
                                                    
                                                    </tr>
                                                </thead>
                                                {
                                                    
                                                    <tbody>
                                                         {
                                                            
                                                        this.state.result.map(item => {
                                                            return(
                                                                <tr>
                                                                   
                                                                    <td>{ item.task }</td>
                                                            <td>{ item.marks }</td>
                                                                    
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                    
                                                   
                                                </tbody>
                                                }
                                                
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    
                </div>
            </div>

            

            
        </section>
        
                            
                       
       

            </div>
        )
    }
}

export default Reports
