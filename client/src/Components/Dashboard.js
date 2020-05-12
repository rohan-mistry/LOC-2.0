import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>

                <header id="topnav" class="defaultscroll sticky">
                    <div class="container">
                    
                        <div>
                            <a class="logo" href="">STUTER</a>
                        </div>                 
                        <div class="buy-button m-1">
                            <a href="/SignIn"  class="btn btn-primary">Sign Up</a>
                        </div>
                        <div class="buy-button m-1">
                            <a href="/Login"  class="btn btn-primary">Login</a>
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
                        
                            
                            
                            <div class="buy-menu-btn d-none">
                                <a href="/SignIn" target="_blank" class="btn btn-primary">Sign Up</a>
                            </div>
                            <div class="buy-menu-btn d-none">
                                <a href="/Login" target="_blank" class="btn btn-primary">Login</a>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="bg-home" style={{backgroundImage: `url(images/bg01.jpg )`}} id="home">
                    <div class="home-center">
                        <div class="home-desc-center">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-md-9 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                        <div class="title-heading margin-top-100">
                                            <h1 class="display-4 font-weight-bold mb-3">Student + Teacher = STUTER</h1>
                                            <p class="para-desc mx-auto text-muted">Digitalize learning process !!</p>
                                        </div>

                                        <div class="home-dashboard">
                                            <img src="images\340-3403351_chatbots-builder-pricing-crozdesk-robot-icon-png-white.png" style={{height:"300px",width:'300px',opacity:'0.7',paddingTop:'30px'}} alt="" class="img-fluid mover"/>
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

export default Dashboard