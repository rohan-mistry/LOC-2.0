import React, { Component } from 'react'
import Axios from 'axios'
import fire from '../Config/Config'
import {Link} from 'react-router-dom'

export class ShowTasks extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            tasks:[],
            
        }
    }

    componentDidMount() {
        console.log('waited');
        let email;
        let myApp=this;
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
              let email=user.email;
              console.log(email);
              console.log('insdide');
              let url='http://localhost:8000/api/pending_task/';
            Axios.post(url,{'email':email}).then(res => {
                console.log(res.data);
                console.log(res.error);
                console.log('erooer')
                myApp.setState({tasks:res.data});


            })

            } else {
              // No user is signed in.
            }
          });


       
        // console.log("hefbebfefb");
        // fire.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //       // User is signed in.
        //       email=user.email;
        //     } else {
        //       // No user is signed in.
        //     }
        //   });
       
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
        
        
        
        <section class="bg-half-260 bg-light" style={{background: "url('images/bg.png') center center"}}>
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row mt-5 justify-content-center">
                            <div class="col-lg-10">
                                <div class="title-heading text-center">
                                    <img src="images\test.png" height="136" class="mover" alt=""/>
                                    <h1 class="heading text-primary text-shadow-title mt-4 mb-3">We wish you all the best for these tasks! </h1>
                                    
                                </div>                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        

        {
            this.state.tasks.length==0 ? <h2>No assignments available!</h2>:<div>

                <section class="section border-top">
            
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <div class="table-responsive crypto-table bg-white shadow rounded">
                            <table class="table mb-0 table-center">
                                <thead>
                                    <tr>
                                       
                                        <th scope="col">Name</th>
                                      
                                      
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks ? 
                                        this.state.tasks.map(item => {
                                            return(
                                                <tr>
                                                    <th>
                                                        <Link to={'/' + item.id}><p class="mt-2 mb-0 font-weight-normal h5">{item.task}  </p></Link>
                                                    </th>
                                                    
                                                   
                                                    
                                                </tr>
                                            )
                                        })
                                        :<></>
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
           
            </section>
            </div>
        } 
        
            </div>
        )
    }
}

export default ShowTasks
