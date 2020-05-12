import React,{Component} from 'react';
import './App.css';
import New from './New'
import Dashboard from './Components/Dashboard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import UserSignIn from './UserSignIn'
import Quizbee from './Quiz/index'
import BlogPage from './Components/BlogPage'
import TeacherDash from './Components/TeacherDash';
import upload from './Components/upload';
import Student from './Components/Student';
import ShowTasks from './Components/ShowTasks';
import ShowPost from './Components/ShowPost';
import Submissions from './Components/Submissions';
import Grading from './Components/Grading';
import Reports from './Components/Reports';
import Location from './Components/Location';
import QuizPage from './Components/QuizPage';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';



class App extends Component{


    render(){
        return (
            <div className="App">
        
        
            <Router>
              <div>
           
                <Switch>

					<Route exact path="/">
						<Dashboard/>
					</Route>
					<Route exact path="/Login" component={New}/>
					<Route exact path="/SignIn" component={UserSignIn} />
					<Route exact path="/Quiz">
						<Quizbee/>
					</Route>
					<Route exact path="/teacher" component={TeacherDash}/>
					<Route exact path="/upload" component={upload}/>
					<Route exact path="/assignments" component={Submissions}/> 
					<Route exact path="/student" component={Student}/>
					<Route exact path="/Reports" component={Reports}/>
					<Route exact path="/Location" component={Location}/>
					<Route exact path="/BlogPage">
						<BlogPage/>
					</Route>
					<Route exact path="/createPost" component={CreatePost}/>
					<Route exact path="/pending" component={ShowTasks}/>
					<Route exact path="/QuizPage" component={QuizPage}/>
					<Route exact path='/discussion/:post_id' component={Post} />
					<Route exact path="/correct/:grad_id" component={Grading}/>
					<Route exact path="/:post_id" component={ShowPost}/>
                 
                </Switch>
              
                  
              </div>
             
            </Router>
        
        
                           
                           
            </div>
          );
    }
  
}

export default App;
