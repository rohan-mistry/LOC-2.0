import React, { PureComponent, Component } from 'react';
import "./assets/style.css";
import ReactDOM from 'react-dom'
import quizService1 from './quizService1'
import QuestionBox from './components/QuestionBox';
import Result from './components/Result'
import {Button} from './quizService/Button'
import TimeUp from './TimeUp'
import fire from '.././Config/Config'
import firebase from 'firebase/app'



class QB2 extends Component{
    constructor(props){
        super(props);
        this.state={
          user: this.props.user,
          email: '',
          password: '',
          username:'',
          LastName:'',
          PhoneNumber:'',
          valueToBePassed:'',
          text:'',
          newVT:'',
          myStory:'',
          allStories:[],
          people:[],
          peopleId:[],
          items:[],
          readFullStory:false,
          storyDescription:'',
          newDataObj:{
            story:'',
            name:'',
            storyDescription:'',
            show:false,
          },
          bool:null,
          displayFullStory:false,
          nulledState:false,
          errorMessage:'',
          VerificationCode:'',
          UserLogin:'',
          questionBank:[],
          score:0,
          responses:0,
          work:null,
          play:false,
          render:-1,
          Toggler:'lets begin',
           status: false,
        runningTime: 0,
      viewer:true,
      baser:false,
      score_science:0,
      score_commerce:0,
      score_arts:0,
      score_music:0,
      score_sports:0,
      score_none:0,
      score_service:0,
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.newFun = this.newFun.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.alert = this.alert.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.readFullStory = this.readFullStory.bind(this);
        this.toggleFullStory = this.toggleFullStory.bind(this);
        // this.onSignInSubmit = this.onSignInSubmit.bind(this);
      }
  
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
        handleChangeEmail(e){
          this.setState({email:e.target.value})
        }
    
        handleChangePass(e){
          this.setState({password:e.target.value})
        }
    
    
        login(e) {
          e.preventDefault();
          fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            });
        }
      
      
      
        signup(e){
          e.preventDefault();
          fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).then((u)=>{})
          .catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            })
        }
    
 
        componentDidMount(){
    
        //   if(!this.state.user){
        
        //     firebase.auth().signInWithPopup(provider).then(function(result) {
        //       // This gives you a Google Access Token. You can use it to access the Google API.
        //       var token = result.credential.accessToken;
        //       // The signed-in user info.
        //       var user = result.user;
        //       // ...
        //     }).catch(function(error) {
        //       // Handle Errors here.
        //       var errorCode = error.code;
        //       var errorMessage = error.message;
        //       // The email of the user's account used.
        //       var email = error.email;
        //       // The firebase.auth.AuthCredential type that was used.
        //       var credential = error.credential;
        //       // ...
        //     });
           
        //   }
     
          
      
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
                console.log("Verified User !!")
              }
              else{
                console.log("Not Verified Yet")
              }
              this.setState({ user });
              var user = firebase.auth().currentUser;
              var name, email, photoUrl, uid, emailVerified,data;
              
              data = this.state.displayName
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;  
                this.setState({displayName:uid})
                this.setState({email:email})
    
                if(localStorage.getItem('Username') == "null"){
                  if(this.state.username != ""){
                  localStorage.setItem("Username",this.state.username)
                  }
                  if(this.state.username == ""){
                    var db = firebase.firestore();
                      var docRef = db.collection("users").doc(this.state.user.uid);
    
                      docRef.get().then(function(doc) {
                          if (doc.exists) {
                             localStorage.setItem("Username",doc.data())
                             
                          }
                      })
                  }
                }
                if(localStorage.getItem('Username') != "null"){
                  this.setState({
                    valueToBePassed: localStorage.getItem('Username')
                  })
                }
            console.log(uid)
          
          
    
    
    
            var db = firebase.firestore();
    if(user){
      if(this.state.username != ""){
            db.collection("users").doc(this.state.displayName).set({
            name: localStorage.getItem('Username'),
            }).then(function() {
              console.log("Data Ojbect for new User created");
            });}
    
    
    
    
    
    if(this.state.username == ""){
      var docRef = db.collection("cities").doc("SF");
    
    docRef.get().then(function(doc) {
        if (doc.exists) {
      db.collection("users").doc(this.state.displayName).set({
        name: doc.data().name,
        }).then(function() {
          console.log("Data Ojbect for new User created");
         
        })
      
        } 
    })
    
    }
          }
    
          var docRef = db.collection("stories").doc(this.state.user.uid);
    
          docRef.get().then(function(doc) {
              if (doc.exists) {
                
                var hello = doc.data().story;
                console.log(hello)
                self.setState({myStory:hello})
                  console.log("Document data:", doc.data().story);
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
       
    
          db.collection("stories").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data().story);
                self.setState(prevState => ({
                  newDataObj: {                   // object that we want to update
                      ...prevState.newDataObj,    // keep all other key-value pairs
                      name: doc.id,
                      story:doc.data().story,
                      storyDescription:doc.data().storyDescription,
                      bool: doc.data().show ,
                      likes:100  ,
                      show:doc.data().show    // update the value of specific key
                  },
              }))
              self.setState({ allStories: [...self.state.allStories,self.state.newDataObj ] }) //simple value
              // self.setState({newDataObj:doc.id=doc.data()})
              console.log(self.state.allStories)
          
              
                self.setState({ peopleId: [...self.state.peopleId, doc.id ] }) //simple value
                self.setState({storyDescription : doc.data().storyDescription})
                    
            }); 
            console.log(self.state.bool)
            // console.log(self.state.allStories)
      // console.log(self.state.peopleId)
      console.log(self.state.storyDescription)
            
        });   
    var docRef = db.collection("users").doc(this.state.user.uid);
    
        docRef.get().then(function(doc) {
            if (doc.exists) {
              var hello = doc.data().name;
              self.setState({newVT:hello})
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
        
            } else {
              this.setState({ user: null });
              if(localStorage.getItem('Username') != null){
                localStorage.setItem("Username",null)
    
              }
              this.setState({valueToBePassed:''})
            }
          });
    
        }
    
        // componentDidMount() {
    
        //   fire.auth().onAuthStateChanged((user) => {
        //   if(user){
        //     if(localStorage.getItem('Username') == "null"){
        //       localStorage.setItem("Username",this.state.username)
        //     }
        //   }
        // })
        // }
        submit=(e)=>{
          let self = this
          e.preventDefault();
         console.log('hi')
         this.setState({text:""})
        
        
        
        }
    
        toggleFullStory(name){
          this.setState({nulledState:true})
          var db = firebase.firestore();
          db.collection("stories").doc(name).update({
              show:true
            }).then(function() {
              console.log("Data Ojbect for new User created");
            });
            window.location.reload();
        }
    
    
        logout(){
          firebase.auth().signOut();
        }
        
        handleChange(e){
          this.setState({[e.target.name]: e.target.value});
      }

       
      newFun(e){
        e.preventDefault();
//         var actionCodeSettings = {
//           // URL you want to redirect back to. The domain (www.example.com) for this
//           // URL must be whitelisted in the Firebase Console.
//           url: 'http://localhost:3000/UserSignIn?username=&Occupation=&PhoneNumber=&signup-email=sanghavipreet2001%40gmail.in&signup-password=',
//           // This must be true.
//           handleCodeInApp: true,
//         };
//         var email = this.state.email;
//         firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
// .then(function() {
//   // The link was successfully sent. Inform the user.
//   // Save the email locally so you don't need to ask the user for it again
//   // if they open the link on the same device.
//   localStorage.setItem("emailForSignIn",email)
// })
// .catch(function(error) {
// console.log(error)});
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});

       }
        
alert(){
  alert('Email has been verified...')
}

        

    getQuestions=()=>{
        quizService1().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };

    playAgain=()=>{
        
        this.setState({
        responses:0,
        score:0, 
        });

           
             
    }
    chaluer=()=>{
      
        this.setState({
         chalu:true
        })
    }
    chaluer1=()=>{
      
        this.setState({
         chalu1:true
        })
    }
    chaluer2=()=>{
      
        this.setState({
         chalu2:true
        })
    }
    play=()=>{
        
        this.setState(state => {
            if (state.status) {
              clearInterval(this.timer);
            } else {
              const startTime = Date.now() - this.state.runningTime;
              this.timer = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime });
              });
            }
            return { status: !state.status };
          });

        this.setState({play: !this.state.play})
        if(this.state.play===false){
            this.setState({
                Toggler:'Click to close'
            });
        }
        if(this.state.play===true){
            this.setState({
                Toggler:'Click to resume'
            });
        }
    }

    componentDidMount(){
        this.getQuestions();
        console.log("Value = " + this.state.score_science);
    }

    computeAnswer=(answer,correctAnswer,type)=>{
        let self = this;
        if(answer===correctAnswer){
            if(type=="science"){
                self.setState({score_science: self.state.score_science+1})
                console.log("score_science :" +  self.state.score_science)
            }
            if(type=="commerce"){
                self.setState({score_commerce:  self.state.score_commerce+1 })
                console.log("score_commerce" +self.state.score_commerce)
            }
            if(type=="arts"){
                this.setState({score_arts: self.state.score_arts+1 })
                console.log("score_arts" +self.state.score_arts)
            }
            if(type=="Sports"){
                self.setState({score_sports: self.state.score_sports+1  })
                console.log("Sports:" +self.state.score_sports)
            }
            if(type=="Social Service"){
                this.setState({score_service:self.state.score_service+1})
                console.log("Social Service" +self.state.score_service)
            }
            // if(type=="none"){
            //     this.setState({score_none: this.state.score_none + 1  })
            //     console.log("score_none" +this.state.score_none)
            // }
            self.setState({
                score:self.state.score + 1
            });
        }
        if(answer!==correctAnswer){
            self.setState({
                score:self.state.score 
            });
        } if(answer!==correctAnswer){
            self.setState({
                score:self.state.score 
            });
        }
        if(self.state.responses==25){
            self.setState({
            viewer:false,
            });
        }
        self.setState({
            responses:self.state.responses<25? self.state.responses+1 :25
                });


                fire.auth().onAuthStateChanged((user) => {
         
                    if (user) {
                        var db = firebase.firestore();
                        if(user){
                          
                                db.collection("scores").doc(user.uid).set({
                                score:{
                                science: this.state.score_science + 1,
                                commerce:this.state.score_commerce + 1,
                                arts:this.state.score_arts + 1,
                                social:this.state.score_service + 1,
                                sports:this.state.score_sports + 1,
                                }
                                
                                }).then(function() {
                                  console.log("Data Ojbect for new User created");
                                });
                    }
    }
})
}


    render(){
         const { runningTime } = this.state; 
    return(

        <>
        {this.state.viewer?(<div className='container1'>
    {this.state.responses!==25?(<><div className='h1'>Math</div><p>Time elapsed: {runningTime/1000}seconds</p>
     <Button onClick={this.play}>{this.state.Toggler}</Button></>):null}
    {this.state.play>0 &&
    this.state.questionBank.length>0 && 
    this.state.responses <25 &&
    this.state.questionBank.map(({question,answers,correct,questionId,type})=>(
      <QuestionBox  question={question} options={answers}  key={questionId} selected={answer=>this.computeAnswer(answer,correct,type)}/>
    ))}
          {this.state.responses === 25?(<><Result score={this.state.score} type={this.state.type} playAgain={this.playAgain} baser={this.state.baser}  runningTime={runningTime} /> </>):null}
        </div>):null}
    </>
    );
}
}

export default QB2