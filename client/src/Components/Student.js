import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Student extends Component {
   
    render() {
        return (
            <div>
             <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                
                <div>
                    <a class="logo" href="/SignIn">STUTER</a>
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
        
        

     
        <div class="position-relative">
            <div class="shape overflow-hidden text-white">
                <svg viewbox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
       

       
        <section class="section">
            <div class="container">
                <div class="row">
                   

                        <div class="col-md-4 col-12">
                            <div class="features mt-5">
                                <div class="image position-relative d-inline-block">
                                    <img src="images\icon\pen.svg" alt=""/>
                                </div>

                                <div class="content mt-4">
                                    <h4 class="title-2"><a href="/pending">Pending Assignment</a></h4>
                                    
                                </div>
                            </div>
                        </div>
                   
                    
                        <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\calendar.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <Link to="/Reports"><h4 class="title-2">Reports</h4></Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\intellectual.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2"><a href="/QuizPage">Quiz</a></h4>
                                 </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\user.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2"><a href="/BlogPage">Discussion</a></h4>
                                   </div>
                        </div>
                    </div>
                    
                    
                    
                    
                   
                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                            <img src="images\icon\user.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2"><a href="/Location">Hostel</a></h4>
                                 </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\sand-clock.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2"><a href="">Make Notes</a></h4>
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

export default Student
