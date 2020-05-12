import React, { Component } from 'react'
import fire from './Config/Config'
import firebase from 'firebase/app'
import Student from './Components/Student'
import TeacherDash from './Components/TeacherDash'


export class New extends Component {
    constructor(props){
        super(props);
        this.state={
          user: null,
          email: '',
          password: '',
          accType:'',
          errorMessage:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.newFun = this.newFun.bind(this);
        this.login = this.login.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
        
    
        login(e) {
          e.preventDefault();
          let myapp=this;
          var db=fire.firestore();
          fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
              fire.auth().onAuthStateChanged(function(user) {
                if (user) {
                  // User is signed in.
                  console.log('account type updated');
                 db.collection('users').doc(user.uid).get().then(temp => {
                   console.log(temp.data().accType);
                  myapp.setState({accType:temp.data().accType})
                 })
                  // ...
                } else {
                  // User is signed out.
                  // ...
                }
              });
          }).catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            });
            
        }
      
      
        componentDidMount(){
    
        
         
          let self = this;
         
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        return firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      }); 
      
          fire.auth().onAuthStateChanged((user) => {
            
            if (user) {
              if(user.emailVerified){
                   var db=fire.firestore();
                console.log("Verified User !!");
                var docRef = db.collection("users").doc(user.uid);

                docRef.get().then(function(doc) {
                    if (doc.exists) {
                       db.collection('users').doc(user.uid).get().then(temp => {
                  console.log(temp.data().accType);
                 self.setState({accType:temp.data().accType})
                })
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
                
              }
              else{
                console.log("Not Verified Yet")
              }
              this.setState({ user });
              var user = firebase.auth().currentUser;
              
            } else {
              this.setState({ user: null });
              
             
            }
          });
    
        }
    
       
        
    
        logout(){
          firebase.auth().signOut();
        }
        
        
      
       
      newFun(e){
        e.preventDefault();

        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function() {
          // Email sent.
        }).catch(function(error) {
          // An error happened.
        });

       }
        
    render() {
        return (
<>


 <div>
                {this.state.user?(<> 
                
                {/* User Dashboard */}
                

                   
           {this.state.user.emailVerified?(
           <>  
            {
                    this.state.accType=='Teacher'?
                    <>
                    
                    <TeacherDash/>
                    </>:
                    
                    <>
                    <Student/>
                    </>
                  }
           </>):(<><div class="form-group" style={{paddingTop:200}}>
                <a class="btn btn-outline-primary" onClick={this.newFun}>Verfiy Your Account</a>
              </div></>)}
                 <button style={{paddingTop:'100p'}} class="btn btn-outline-primary m-3 mb-4" onClick={this.logout}>Logout</button> </>):(<> <div>
                
      
            
            <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
                <section class="bg-home">
                <div class="home-center">
                    <div class="home-desc-center">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-6">
                                    <div class="mr-lg-5">   
                                        <img src="images\login.png" class="img-fluid d-block mx-auto" alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div class="login-page bg-white shadow rounded p-4">
                                        <div class="text-center">
                                            <h4 class="mb-4">Login</h4>  
                                        </div>
                                        <form class="login-form">
                                            <div class="row">


                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Your Email <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input type="email" class="form-control pl-5" onChange={this.handleChange} value={this.state.email} placeholder="Email" name="email" required=""/>
                                                    </div>
                                                </div>

                                              
        
                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Password <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-key ml-3 icons"></i>
                                                        <input type="password" value={this.state.password} name="password" class="form-control pl-5" onChange={this.handleChange} placeholder="Password" required=""/>
                                                    </div>
                                                </div>
    
                                         
                                                <div class="col-lg-12 mb-0">
                                                    <button onClick={this.login} class="btn btn-primary w-100">Sign in</button>
                                                </div>
                                                
                                                <div class="col-12 text-center">
                                                    <p class="mb-0 mt-3"><small class="text-dark mr-2">Don't have an account ?</small> <a href="/SignIn" class="text-dark font-weight-bold">Sign Up</a></p>
                                                    <h7  style={{color:'red',fontWeight:'bold',paddingLeft:'50px',paddingRight:'60px'}}>{this.state.errorMessage}</h7> 
                                                </div>
                                            </div>
                                        </form>
                                      
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div>
            </section> 

                </div>  </>)}
         
            </div>
           
                
           </>
        )
    }
}

export default New
