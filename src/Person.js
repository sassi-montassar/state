import React, { Component } from 'react';
import './App.css';


 class Person extends Component {
     constructor(){
         super();
     this.state = {
           fullName : "sassi montassar",
           bio : " Good",
           imgSrc:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8fDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
           profession : "full stack developer",
           timer: 0,
           intervall: null

     }
    }
 
    componentDidMount() {
        console.log("Component Did Mount ()");
        this.setState({intervall:setInterval(()=>{
            this.setState(
                {
                    timer:this.state.timer+1
                }
            )
        }, 1000)})
       
       }
       
       componentDidUpdate() {
       console.log("Component Did Update ()");
       
       }
       
       componentWillUnmount() {
        console.log("Component Will Unmount ()");
        
       }
    render() {
        return (
            <div>
                <h3>{this.state.timer}</h3>
                <h1>Name :{this.state.fullName}</h1>
                <h3>Bio : {this.state.bio}</h3>
                <img src={this.state.imgSrc} />
                <p>My proffesion is : {this.state.profession}</p>
                
            </div>
        )
    }
}

    

export default Person;