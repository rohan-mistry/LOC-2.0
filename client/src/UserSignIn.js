import React, { Component } from 'react'
import fire from './Config/Config'
import firebase from 'firebase/app'
import Student from './Components/Student'
import TeacherDash from './Components/TeacherDash'

export class UserSignIn extends Component {
    constructor(props){
        super(props);
        this.state={
          accType:'',
          user: this.props.user,
          email: '',
          password: '',
          errorMessage:'',
    
        }
       
        this.handleChange = this.handleChange.bind(this);
        this.newFun = this.newFun.bind(this);
        this.signup = this.signup.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        
      }
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
        signup(e){
          e.preventDefault();
          let myapp=this;
          var db=fire.firestore();
          fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).then((u)=>{
            
          })
          .catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            })
            fire.auth().onAuthStateChanged(function(user) {
              if (user) {
                // User is signed in.
                console.log('accoun type updated');
               db.collection('users').doc(user.uid).set({
                 accType:myapp.state.accType
               },{merge:true})
                // ...
              } else {
                // User is signed out.
                // ...
              }
            });
        }
    
 
        componentDidMount(){
    
        
         var db=fire.firestore();
          console.log(this.state.newDataObj)
          let self = this
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
                console.log("Verified User !!");
                var db=fire.firestore();
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
              var uid = user.uid;  
              console.log(uid);
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
            <div>
                {this.state.user?(<> 
                  
                
                {/* User Dashboard */}
                
             

                
        
           {this.state.user.emailVerified?(<>   
                  {
                    this.state.accType=='Teacher'?<TeacherDash/>:<Student/>
                  }
           
              </>):(<><div class="form-group" style={{paddingTop:200}}>
                <a class=" btn btn-primary" onClick={this.newFun}>Verfiy Your Account</a>
              </div></>)}
                 <button style={{paddingTop:'100p'}} class="btn btn-outline-primary m-3 mb-4" onClick={this.logout}>Logout</button> </>):(<> 
                  <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>  <section class="cover-user bg-white">
            <div class="container-fluid">
                <div class="row position-relative">
                    <div class="col-lg-4 cover-my-30 order-2">
                        <div class="cover-user-img d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <div class="login_page position-relative">
                                        <div class="text-center">
                                            <h4 class="mb-4" href="/SignUp">Signup</h4>  
                                        </div>
                                        <form>
            
              <div class="form-group" onChange={this.handleChange}>
                <select class="form-control" id="accType" name="accType">
                <option value="" selected disabled hidden>Account Type</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                </select>
              </div>
              <div class="form-group">
                <input type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email Address" class="form-control"/>
              </div>
            
              <div class="form-group">
                <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" class="form-control"/>
                <small class="text-muted">Must be at least 6 characters</small>
              </div>
              
              <div class="form-group">
                <button class="btn-block btn btn-primary" type="submit" onClick={this.signup}>Sign Up</button>
              </div>
           
              <div class="mx-auto">
                                                <p class="mb-0 mt-3"><small class="text-dark mr-2">Already have an account ?</small> <a href="/LogIn" class="text-dark font-weight-bold">Log in</a></p>
                                            </div>


                                            <h7  style={{color:'red',fontWeight:'bold'}}>{this.state.errorMessage}</h7>   
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="signup-agree"/>
               
              </div>
              <hr/>
            </form>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>    

                    

                    <div class="col-lg-8 offset-lg-4 padding-less img order-1" style={{backgroundImage:"url('images/021.jpg')"}} data-jarallax='{"speed": 0.5}'></div>
                </div>
            </div>
        </section></>)}
         
            </div>
        )
    }
}

export default UserSignIn
