import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) 
    { 
        super(props); 
        this.state = { hello : "World!" }; 
    } 
  
    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ hello : "Joy" }); 
    } 
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    }        
    render() {  
          return (
            <div> 
                <h4>ReactLife Cycle Method, Hello{ this.state.hello }</h4> 
                <h2> 
                    <a onClick={this.changeState.bind(this)}><button>Press Here!</button></a> 
                </h2> 
            </div> 
          )
        }  
}
