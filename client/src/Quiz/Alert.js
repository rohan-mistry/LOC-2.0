import React from 'react'
import "./assets/style.css";
import Quizbee from "./index1";
import { Component } from "react";


class Alert extends React.Component {
    constructor(props) {
      super(props);
      this.state = { minute: 0, second: 0 };
    }

  
    render() {
      return (
        <div className="container">
         <h1>Time Up</h1>
        </div>
      );
    }

  }
  
  
export default Alert;
