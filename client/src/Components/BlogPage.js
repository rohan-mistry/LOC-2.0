import React, { Component } from 'react'
import fire from  '../Config/Config'

import { Link } from 'react-router-dom';


export class BlogPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            posts:[],
            username:'username'
            
        }
    }
   componentDidMount() {
        let myApp = this;
        console.log('indie cdm');
        var db=fire.firestore();
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                myApp.setState({username:user.email});
                db.collection('posts').get().then(temp => {
                   myApp.setState({posts:[...temp.docs]});
                   console.log(myApp.state.posts);
                })
            } else {
               console.log('please log in');
            }
        });
   }
  
    render() {
       
        return (
           <div>
               <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                   <div>
                    <a class="logo" href="/BlogPage">Blogs</a>
                </div>                 
                <div class="buy-button">
                    <a  class="btn btn-primary">{this.state.username}</a>
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
                        <li><a href="/BlogPage">Posts</a></li>
                        <li >
                            <a href="/createPost">Create Post</a>
                        </li>
                        <li><a href="/SignIn">Dashboard</a></li>
                        
                    </ul>
                    <div class="buy-menu-btn d-none">
                        <a  class="btn btn-primary">Username</a>
                    </div>
                </div>
            </div>
        </header>
        {
            this.state.posts.length==0?<h2 style={{textAlign:'center',paddingTop:107}}>No posts available</h2>:(
                <div style={{paddingTop:100}}>
{
            this.state.posts.map(temp => {
                
                return (
                    <Link to={'/discussion/' + temp.id}>
                        <a key={temp.id} >
                            <section class="section" style={{padding:0}}>
                                <div class="container">
                                    <div class="row">
                                    
                                        <div class="col-lg-8 col-md-7">
                                            <div class="">
                                                <div class="blog position-relative overflow-hidden shadow rounded">
                                                   
                                                    <div class="content p-4">
                                                <h6><i class="mdi mdi-tag text-primary mr-1"></i><a href="javscript:void(0)" class="text-primary">{temp.data().category}</a></h6>
                                                    
                                                <p class="text-muted">{temp.data().title}</p>
                                                        <div class="post-meta mt-3">
                                                            <ul class="list-unstyled mb-0">
                                                                <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>{temp.data().likes}</a></li>
                                                                <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>{temp.data().no_comments}</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </a>
                    </Link>
                    
                    
                    
                )
            })
        }
        
        </div>
            )
        }
        
        
        
        </div>
        )
    }
}

export default BlogPage
