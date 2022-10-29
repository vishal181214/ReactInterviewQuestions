import React from 'react'

export default function Home() {
  return (
    <div>
        <h3>What is an event in react?</h3>
            <p>An event is an action that could be triggered as a result of the user action or system generated event.</p> 
            <p>For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions</p> 
            <p>are called events. React has its own event handling system which is very similar to handling events on DOM</p> 
            <p>elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser</p> 
            <p>wrapper of the browser's native event.</p>

        <h3>What is memory leak and how to overcome?</h3>
            <p>Memory leak occurs when programmers create a memory in heap and forget to delete it. The consequences of</p> 
            <p>memory leak is that it reduces the performance of the computer by reducing the amount of available memory.</p>
            <p>To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.</p>

        <h3>Do you prefer function-based or class component and why?</h3>
            <p>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX)</p>
            <p>There is no render method used in functional components.</p>
            <p>Hooks can be easily used in functional components to make them Stateful.</p>

        <h3>Explain reducer as pure function in redux?</h3>
            <p>A Reducer is a pure function that takes the state of an application and action as arguments and returns a new</p> 
            <p>state. For example, an authentication reducer can take an initial state of an application in form of an empty</p> 
            <p>object and an action that tells it that a user has logged in and returned a new application state with a logged-in user.</p> 
            <p>Pure functions are functions that do not have any side effects and will return the same results if the same arguments are passed in.</p>

        <h3>Why do we use redux thunk?</h3>
            <p>Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some</p>
            <p>asynchronous code before dispatching an action.</p>

        <h3>What do you know about NPM?</h3>
            <p>npm is the world's largest Software Registry.</p>
            <p>The registry contains over 800,000 code packages.</p>
            <p>Open-source developers use npm to share software.</p>
            <p>NPM consists of two main parts:</p>
            <p>a CLI (command-line interface) tool for publishing and downloading packages, and</p>
            <p>an online repository that hosts JavaScript packages</p>
    </div>
  )
}


