import React from 'react'
import UseEffectExample from './UseEffectExample'
import UseStateExample from './UseStateExample'
import UseReducerExample from './UseReducerExample'

export default function Home(props) {
  return (
    <div>
        <h3><span className='questions'>Q1.</span>Difference between Axios and fetch</h3>
        <table className='answer'>
            <tr>
                <th>Axios</th>
                <th>fetch</th>
            </tr>
            <tr>
                <td>Axios has url in request object.</td>
                <td>Fetch has no url in request object.</td>
            </tr>
            <tr>
                <td>Axios enjoys built-in XSRF protection.</td>
                <td>Fetch does not.</td>
            </tr>
            <tr>
                <td>Axios’ data contains the object.</td>
                <td>Fetch’s body has to be stringified.</td>
            </tr>
            <tr>
                <td>Axios performs automatic transforms of JSON data.</td>
                <td>Fetch is a two-step process when handling JSON data- first, to make the actual<br/> request; second, to call the .json() method on the response.</td>
            </tr>
            <tr>
                <td>Axios has the ability to intercept HTTP requests.</td>
                <td>Fetch, by default, doesn’t provide a way to intercept requests.</td>
            </tr>
            <tr>
                <td>Axios has built-in support for download progress.</td>
                <td>Fetch does not support upload progress.</td>
            </tr>
            <tr>
                <td>Axios “GET” call can have body Content</td>
                <td>Fetch “GET” call cannot have body Content</td>
            </tr>
        </table>
        <h3><span className='questions'>Q2.</span>What is UseState Hook ?</h3>
            <div className='answer'>
                <p>The React useState Hook allows us to track state in a function component. State <br/>
                generally refers to data or properties that need to be tracking in an application.</p>
                <UseStateExample />
            </div>
        <h3><span className='questions'>Q3.</span>What is useEffect Hook ?</h3>
            <div className='answer'>
            <p>The useEffect Hook allows you to perform side effects in your components.<br/>
               Some examples of side effects are: fetching data, directly updating the DOM, and timers.<br/>
               useEffect accepts two arguments. The second argument is optional.</p>
                <UseEffectExample/>
            </div>
        <h3><span className='questions'>Q4.</span>What is UseReducer Hook ?</h3>
            <div className='answer'>
                <p>The useReducer Hook is used to store and update states, just like the useState Hook.<br/>
                   The useReducer(reducer, initialState) hook accept 2 arguments: the reducer function <br/>
                   and the initial state. The hook then returns an array of 2 items: the current state <br/>
                   and the dispatch function.</p>
                <UseReducerExample />
            </div>

        <h3><span className='questions'>Q5.</span>How do you pass data from parent to child ?</h3>
            <p className='answer'>Data comes from parent:- <h5 className='answer'>{props.data}</h5></p>
    </div>
  )
}
