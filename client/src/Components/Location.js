import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

export class Location extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            searchTerm:null,
            terms:[],
        }
    }
    componentDidMount() {
        
    }
    handleSubmit=()=>{
        console.log('meagges is bajdb');
        let url='http://localhost:8000/api/hostels/';
        console.log(this.state.searchTerm);
        Axios.post(url,{'str':this.state.searchTerm}).then(res => {
            console.log(typeof(res.data) );
            console.log(res.error);
            console.log(res.data );
            console.log(this.state.searchTerm);
            this.setState({terms:res.data});
        })
    }
    handleChange=(e)=>{
        let name=e.target.name;
        console.log(e.target.name);
        console.log('idie dvhange');
        this.setState({[name]:e.target.value});
        console.log(this.state.searchTerm);
        
    }
    render() {
        return (
            <div>
               <header id="topnav" class="defaultscroll sticky bg-white">
            <div class="container">
                
                <div>
                    <a class="logo" href="">Hostel</a>
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
                    
                </div>
            </div>
        </header>
        <section class="section pt-5 mt-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        {/* <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:0}} allowfullscreen=""></iframe>
                        </div> */}
                        <div id="mapContainer"></div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                        <div class="custom-form p-4 rounded shadow">
                            <div id="message"></div>
                            
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group position-relative">
                                            <label>Location: <span class="text-danger">*</span></label>
                                            <i class="mdi mdi-account ml-3 icons"></i>
                                            <input  onChange={this.handleChange}  name="searchTerm" type="text" class="form-control pl-5" placeholder="Enter Location"/>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 text-center">
                                                <input id="submit" name="send" onClick={this.handleSubmit} class="submitBnt btn btn-primary btn-block" value="Send Message"/>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                           
                        </div>
                    </div>

                    
                </div>
            </div>
            {
                this.state.terms.length!=0 ?<div>
                    <div class="col mt-4 pt-2">
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Hostels Nearby </h4>
                                    </div>

                                    <div class="p-4">
                                        <div class="table-responsive bg-white shadow rounded">
                                            <table class="table mb-0 table-center">
                                                <thead>
                                                    
                                                    <tr>
                                                    
                                                    <th scope="col">Name</th>
                                                    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.terms.map(item => {
                                                            return(
                                                                <tr>
                                                        
                                                        <td>{item.name}</td>
                                                    </tr>
                                                            )
                                                        })
                                                    }
                                                    
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div> : <></>
            }
                            
                           
        </section>
        
            </div>
        )
    }
}

export default Location
