import React, { Component } from 'react'
import fire from '.././Config/Config'
import {Link} from 'react-router-dom'

export class TeacherDash extends Component {
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
              <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                
                <div>
                    <a class="logo" href="index.html">STUTER</a>
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
                        <li><a>Home</a></li>
                        
                    </ul>
                    
                </div>
            </div>
        </header>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 pb-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\01.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                                <h4><Link to="/upload" class="title text-dark">Upload Assignments</Link></h4>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4 pb-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\02.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                            <h4><Link to="/assignments" class="title text-dark">Check Assignments</Link></h4>
                                
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

export default TeacherDash
