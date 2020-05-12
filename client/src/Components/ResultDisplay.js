import React, { Component } from 'react'
import fire from '.././Config/Config'
import firebase from 'firebase/app'

export class ResultDisplay extends Component {
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
          result_science:'',
          result_commerce:'',
          result_arts:'',
          result_sports:'',
          result_social:'',
          reason:'',
          //Get from database
          score_science:'',
          score_commerce:'',
          score_arts:'',
          score_social:'',
          score_sports:'',
          draw:'',
          finance:'',
          hoursStudying:0,
          hoursPhone:0,
          academics_marks:0,
          mathsForDay:'',
          UserValue:'',
          drawYes:''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.newFun = this.newFun.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.compute = this.compute.bind(this);
        this.alert = this.alert.bind(this);
    //     this.compute = this.compute.bind(this);
    //   this.componentDidMount = this.componentDidMount.bind(this);
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
        fire.auth().onAuthStateChanged((user) => {
            
            if (user) {
     var user = firebase.auth().currentUser;
 var name, email, photoUrl, uid, emailVerified;
 console.log(user.uid)
 if (user != null) {
 name = user.displayName;
 email = user.email;
 photoUrl = user.photoURL;
 emailVerified = user.emailVerified;
 uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
 }
 
 console.log(uid)
 this.setState({userUid:uid})
}})
       
   
   
       fire.auth().onAuthStateChanged((user) => {
   
         if (user) {
 
           
           var user = firebase.auth().currentUser;
           var name, email, photoUrl, uid, emailVerified;
           
           if (user != null) {
           name = user.displayName;
           email = user.email;
           photoUrl = user.photoURL;
           emailVerified = user.emailVerified;
           uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                          // this value to authenticate with your backend server, if
                          // you have one. Use User.getToken() instead.
           }
           this.setState({user})
           var db = firebase.firestore();
           console.log(user.uid);
 this.setState({userUid:uid});

 var db = firebase.firestore();
 
 var docRef = db.collection("scores").doc(user.uid);

 docRef.get().then((doc) => {
     if (doc.exists) {
         console.log("Document data:", doc.data());
         this.setState({
             result_science: doc.data().score.science,
             result_commerce:doc.data().score.commerce,
             result_arts:doc.data().score.arts,
             result_sports:doc.data().score.sports,
             result_social:doc.data().score.social,


         })
         console.log("pele:"  + this.state.result_science)
     } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
     }
 }).catch(function(error) {
     console.log("Error getting document:", error);
 });

 var docRef = db.collection("userInput").doc(user.uid);
 docRef.get().then((doc) => {
     if (doc.exists) {
         // console.log("Document data:", doc.data());
         // console.log(doc.data().drawForDay);

         this.setState({
             score_science:doc.data().drawForDay,
             draw: doc.data().drawForDay,
             mathsForDay:doc.data().statsForDay,
             academics_marks:doc.data().marks,
             finance:doc.data().financeRelatedWork ,
             // result_social:doc.data().score.social,
             hoursPhone:doc.data().hourPhone,
             hoursStudying:doc.data().hourStudying, 
         })
         localStorage.setItem("draw",doc.data().drawForDay)
         console.log("hi:" + this.state.draw);
         if(this.state.draw.slice(0,1)=="Y" && this.state.academics_marks<70 && this.state.hoursStudying < 5 && this.state.result_arts>2){
            this.setState({reason:"Given that your accademic records are not out of the box and your passion for drawing ,we think pursuing arts will be a good option"}
            )
        }if(this.state.reason==null){
        console.log(this.state.result_arts)}
        if(this.state.draw.slice(0,1)=="N" && this.state.academics_marks>95 && this.state.hoursStudying > 7){
            this.setState({reason:"Given that your accademic records are  out of the box and your passion for mathematics ,we think pursuing science will be a good option"}
            )
        }
        if(this.state.draw.slice(0,1)=="N" && this.state.academics_marks>85 && this.state.result_commerce > 3){
            this.setState({reason:"Given that your accademic records are  out of the box and your passion for mathematics ,although your studing time is less than the amount of time you spend on your phone..we prefer pursuing Commerce-CA/CS"}
            )
        }
        if(this.state.finance.slice(0,1)=="Y" &&  this.state.result_commerce >1){
            this.setState({reason:"Given your attention towards Finance , we prefer Commerce-BAF/BMS would be a good carrier choice..."}
            )
        }
        if(this.state.mathsForDay.slice(0,1)=="Y" && this.state.academics_marks>85 && this.state.hoursStudying > 5){
            this.setState({reason:"Given your attention towards Maths and your passion towards learning , we prefer Science-Enng/Doctorate would be a good carrier choice..."}
            )
        }
        if( this.state.academics_marks<50 && this.state.hoursStudying > 8  &&  this.state.result_science>3){
            this.setState({reason:"Your hardwork will definitely payOff, keep believeing in yourself... Science would be a good choice for you",}
            )
        }
        if(this.state.mathsForDay.slice(0,1)=="Y" && this.state.academics_marks<50 && this.state.hoursStudying > 5){
            this.setState({reason:"Your numbers dont reflect a studios personality, but your passion towards drawing is appreciable..We would ask you to opt for Artss"}
            )
        }
        if(this.state.draw.slice(0,1)=="N" && this.state.result_sports>4)
        {
            
             this.setState({reason:"Your hygeine seems to be very strong..We would ask you to opt for Sports"}
            )
        }
        if( this.state.result_sports>3)
        {
            
             this.setState({reason:"Your hygeine seems to be very strong..We would ask you to opt for Sports"}
            )
        }
        //  console.log(this.state.mathsForDay)
     } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
     }
 })

 
 }
 }
   )
       
  
  
    }

    compute=()=>{
       
    }

   
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

    render() {
  
        return (
            <div>
            <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
            <section class="section">
            <div class="container">
                <div class="row align-items-center">
                 

                    <div class="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title ml-lg-4">
                            <h4 class="title mb-4"> </h4>
                            {/* <p class="text-muted">{this.state.reason}.</p>
                           */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h4 class="title mb-4">{this.state.reason}</h4>
                            <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-responsive text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">{this.state.result_science}/5 : Science</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-internet-explorer text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">{this.state.result_arts}/5 : Arts

                                </h4>
                            </div>
                        </div>
                    </div>
                    
                  
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-bootstrap text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">{this.state.result_social}/5 : Social    </h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-cube-outline text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">{this.state.result_sports}/5 : Sports</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-sass text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">{this.state.result_commerce}/5 : Commerce</h4>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-check-decagram text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">W3c Valid Code</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-vector-bezier text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Flaticon Icon</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 rounded shadow bg-white">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-settings-outline text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Easy to customize</h4>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 text-center mt-4 pt-2">
                        <a href="javascript:void(0)" class="btn btn-primary">See More <i class="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default ResultDisplay
