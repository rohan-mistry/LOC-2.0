import React, {Component} from 'react'
import Quizbee from './index1'

class Home extends Component {

state={
    display:false,
}

toggle=()=>{
this.setState({display:true})
}

render(){
    return(
        <Quizbee/>  )
    ;
}


}


export default Home