import React, { Component } from 'react'
import fire from  '../Config/Config'
import { Link } from 'react-router-dom';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export class Post extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'username',
            no_likes:null,
            no_comments:null,
            name:'',
            title:'',
            category:'',
            content:'',
            image:'',
            author:'',
            quote:'',
            url:'',
            comment:'',
            postedBy:'',
            liked:0,
            comments:null,
            no_likes:0,
            no_comments:0,
          
        }
        
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value});
        console.log(this.state);
     }
    componentDidMount() {
        let myApp = this;
        var db=fire.firestore();
        var storage=fire.storage();
        
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                myApp.setState({username:user.email}); 
                var docRef = db.collection('posts').doc(myApp.props.match.params.post_id);

                docRef.get().then(function(doc) {
                    if (doc.exists) {
                        db.collection('posts').doc(myApp.props.match.params.post_id).get().then(temp => {
                    storage.ref('images').child(temp.data().image).getDownloadURL().then(url => {
                        myApp.setState({url});
                    })
                    myApp.setState({
                        name:temp.data().name,
                        title:temp.data().title,
                        category:temp.data().category,
                        content:temp.data().content,
                        image:temp.data().image,
                        author:temp.data().author,
                        quote:temp.data().quote,
                        comments:temp.data().comments,
                        no_likes:temp.data().likes,
                        no_comments:temp.data().no_comments

                        
                   })
               });
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document! for post");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
               
               
            } else {
              console.log('Please log in');
            }
        });
    }
    handleSubmit=()=>{
        var db=fire.firestore();
        let myApp = this;
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                db.collection('posts').doc(myApp.props.match.params.post_id).get().then(temp =>{
                    let prevComm=temp.data().no_comments;
                    if(temp.data().comments)
                    {
                        db.collection('posts').doc(myApp.props.match.params.post_id).update({
                            comments:[...temp.data().comments,{
                                postedBy:myApp.state.postedBy,
                                comment:myApp.state.comment,
                                time:Date.now()
                            }],
                            no_comments:prevComm+1
                        })
                    }
                    else{
                        db.collection('posts').doc(myApp.props.match.params.post_id).update({
                            comments:[{
                                postedBy:myApp.state.postedBy,
                                comment:myApp.state.comment,
                                time:Date.now()
                            }],
                            no_comments:prevComm+1
                        })
                    }
                    
                })
                
                console.log('comment added');   
             
               
            } else {
              console.log('Please log in');
            }
        });
    }
    handleLike=()=>{
        let status=!this.state.liked;
        console.log('liked');
        this.setState({liked:!this.state.liked});
        this.setState({no_likes:(this.state.no_likes+1)});
        console.log(this.state);
        if(status)
        {
            this.setState({no_likes:(this.state.no_likes+1)})
        }
        else{
            this.setState({no_likes:(this.state.no_likes-1)})
        }
    }
    componentWillUnmount()
    {
        console.log('unmounted');
        var db=fire.firestore();
        let myApp = this;
        fire.auth().onAuthStateChanged(function(user) {
            if(user)
            {
                db.collection('posts').doc(myApp.props.match.params.post_id).update({
                    likes:myApp.state.no_likes
                })
            }
            else {
                console.log('please log in');
            }
        })

    }
    render() {
        
        // console.log(this.state);
        return (
            <div>
                <header id="topnav" class="defaultscroll sticky">
                    <div class="container">
                        <div>
                            <a class="logo" href="/BlogPage">Blogs</a>
                        </div>                 
                        <div class="buy-button">
                            <a  class="btn btn-primary">Username</a>
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
                                <li>
                                    <Link to="/BlogPage">Posts </Link> 
                                </li>
                                <li class="has-submenu">
                                    <Link to="/createPost">Create Post </Link>
                                </li>
                
                                
                            </ul>
                            <div class="buy-menu-btn d-none">
                                <a  class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section class="section" >
                    <div class="container">
                        <div class="row">
                        
                            <div class="col-lg-8 col-md-7">
                                <div class="">
                                    <div class="blog position-relative overflow-hidden shadow rounded">
                                        <div class="position-relative">
                                            <img src={this.state.url} style={{height:500,width:'100%'}} class="img-fluid rounded-top" alt="No image Available"/>
                                        </div>
                                        <div class="content p-4">
                                        
                                            <p class="text-muted mt-3">{this.state.title} </p>
                                            <blockquote class="blockquote mt-3 p-3">
                                                <p class="text-muted mb-0 font-italic">"{this.state.quote}" </p>
                                            </blockquote>
                                            <p class="text-muted">{this.state.content} </p>
                                            <div class="post-meta mt-3">
                                                <ul class="list-unstyled mb-0">
                                                    <li class="list-inline-item mr-2"><a href="javascript:void(0)" onClick={this.handleLike}  class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>{this.state.no_likes}</a></li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>{this.state.no_comments}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* comments */}
                                <div class="p-4 shadow rounded mt-4 pt-2">
                                <h4 class="page-title pb-3">Comments :</h4>
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
                            </div>
                            {/* add comment */}
                            <div class="mt-4 pt-2 p-4 shadow rounded" style={{overflow:'hidden'}}>
                                <h4 class="page-title pb-3">Leave A Comment :</h4>
                               
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Name </label>
                                              
                                                <input id="postedBy" onChange={this.handleChange} name="postedBy" type="text"  class="form-control pl-5" required=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Your Comment</label>
                                                <i class="mdi mdi-comment-outline ml-3 icons"></i>
                                                <textarea id="comment" onChange={this.handleChange}  placeholder="Your Comment" rows="5" name="comment" class="form-control pl-5" required=""></textarea>
                                            </div>
                                        </div>

                                        

                                        

                                        <div class="col-md-12">
                                            <div class="send">
                                            <button onClick={this.handleSubmit} class="btn btn-primary w-100">Send Message</button>
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

export default Post
