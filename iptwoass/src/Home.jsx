import React from 'react'
import Routing from './Components/Routing';

export default function Home(props) {
  return (
    <>
        <h4><span className='questions'>Q1.</span> What is the Difference between react and react native? Which one is library or framework?</h4>
            <p className='answer'>React is a JavaScript library of reusable components designed to create skeletons of the apps, whereas <br/>React Native is a javascript
                framework designed to build native mobile apps with reusable components.</p>

        <h4><span className='questions'>Q2.</span> What is the package name you are using for routing?</h4>
            <p className='answer'>React-Router-Dom</p>

        <h4><span className='questions'>Q3.</span> Routing Implementation</h4>
            <div className='answer'>
                <Routing />
            </div>
        <h4><span className='questions'>Q4.</span> How do you switch/navigate form one component to another in React?</h4>
            <p className='answer'>Data come from parent component <span style={{fontWeight:"bolder",fontSize:"20px"}}>{props.color}</span></p>

        <h4><span className='questions'>Q5.</span> What is lazy loading in react ?</h4>
            <p className='answer'>Lazy loading is a technique for waiting to load certain parts of a webpage until they are needed. Instead<br/> of loading everything all at once, known as
                "eager" loading, the browser does not request certain<br/> resources until the user interacts in such a way that the resources are needed.</p>

        <h4><span className='questions'>Q6.</span> Difference b/w Stateful and stateless Component?</h4>
            <p className='answer'><p>The literal difference is that Stateful component has state, and stateless doesn’t. That means the stateful<br/> 
                                  components are keeping track of changing data, while stateless components print out what is given to them via<br/> 
                                  props, or they always render the same thing.</p><br/> Stateful component is also known as Stateful/Container/Smart 
                                  component <br/>Stateless component is also known as Stateless/Presentational/Dumb component</p>
    
    </>
  )
}
