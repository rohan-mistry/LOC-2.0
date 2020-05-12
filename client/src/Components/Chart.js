import React, { Component } from 'react';
import fire from '.././Config/Config'
import firebase from 'firebase/app'
import CanvasJSReact from '../graphs_assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
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
		  score_science:null,
		  score_commerce:null,
		  score_arts:null,
		  score_music:null,
		  score_sports:null,
		  score_none:null,
		  score_service:null,
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
     
          
      
      
          fire.auth().onAuthStateChanged((user) => {
         let self= this;
            if (user) {
            	var db = firebase.firestore();
    
	var docRef = db.collection("scores").doc(user.uid);

	docRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			self.setState({
				score_science: doc.data().score.science,
				score_commerce:doc.data().score.commerce,
				score_arts:doc.data().score.artts,
				score_sports:doc.data().score.sports,
				score_social:doc.data().score.social,


			})
			console.log(self.state.score_science)
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
		}
	}
		  )}
    
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

	render() {
		const options = {
			exportEnabled: false,
			animationEnabled: true,
			title: {
				text: ""
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
				
					{ y: this.state.score_service * 10, label: "Social Service" },
					{ y: this.state.score_sports * 10, label: "Sports" },
					{ y: this.state.score_science * 10, label: "Scientific Knowledge" },	
					{ y: this.state.score_commerce * 10, label: "Commerce and finance" }

					
				
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		
		</div>
		);
	}
}

export default PieChart;