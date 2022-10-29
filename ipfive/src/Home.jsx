import React from 'react'

export default function Home() {
  return (
    <div>
        <h3>High Order Component in react js ?</h3>
            <p>A higher-order component (HOC) is an advanced technique in React for reusing component logic.</p>
            <p>A higher-order component is a function that takes a component and returns a new component.</p>
        
        <h3>Do you know about SEO ? Is it true that react js supports SEO support ?</h3>
            <p>SEO stands for “search engine optimization.” In simple terms, it means the process of improving</p>
            <p>your site to increase its visibility when people search for products or services related to your</p>
            <p>business in Google, Bing, and other search engines. The better visibility your pages have in </p>
            <p>search results, the more likely you are to garner attention and attract prospective and existing </p>
            <p>customers to your business.</p>
            <p>Yes, its support but not much as other library and framework because of large number of resources are used.</p>

        <h3>Clean up in useEffect ? </h3>
            <p>When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.</p>
            <p>The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.</p>
            <p>the useEffect cleanup function helps developers clean effects that prevent unwanted behaviors and optimizes 
               application performance.</p>

        <h3>What is the use of useCallback and useMemo ? </h3>
            <p>useMemo and useCallback are tools built to help us optimize re-renders. They do this in two ways:</p>
            <p>Reducing the amount of work that needs to be done in a given render. Reducing the number of times that a</p>
            <p>component needs to re-render.</p>
            <h6>useCallback</h6>
            <h3>useCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies</h3>
            <h3>that set the parameters. It’s useful when a component is passing a callback to its child component in order to</h3> 
            <h3>prevent rendering. It only changes the callback when one of its dependencies is changed.</h3>

            <h6>useMemo</h6>
            <p>useMemo is very similar to useCallback. It accepts a function and a list of dependencies, but the difference</p> 
            <p>between useMemo and useCallback is that useMemo returns the memo-ized value returned by the passed function.</p>
            <p>It only recalculates the value when one of the dependencies changes.</p>
        
        <h3>Why do we need keys in react? </h3>
            <p>Keys are used in React to identify which items in the list are changed, updated, or deleted.</p> 
            <p>we can say that keys are used to give an identity to the elements in the lists.</p>
            <p>The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its</p>
            <p>performance when diffing between the virtual and real DOM.</p>

        <h3>Do you know about redux? </h3>
            <p>Redux is a pattern and library for managing and updating application state, using events called "actions". </p>
            <p>It serves as a centralized store for state that needs to be used across your entire application, with rules</p> 
            <p>ensuring that the state can only be updated in a predictable fashion.</p>
            <p>Redux is simply a store to store the state of the variables in your app. Redux creates a process and procedures to</p>
            <p>interact with the store so that components will not just update or read the store randomly.</p>
            <p>Redux works between the Store, Actions, and Reducers</p>

            <p>install redux</p>
            <p>npm install --save redux</p>
            <p>import redux</p>

            <p>The reducer is nothing but a pure function that takes currentState and Action and returns a new state.</p>
            <p> A valid Reducer can return the current state.</p> 
            <p>reducer is just a function with a switch statement to decide which action to execute according to the action.type.</p>

            <p>Create a store</p>
            <p>const store = redux.createStore( rootReducer );</p>

            <p>dispatch actions</p>
            <p>Another method that we execute on the store is to dispatch an action.</p>
            <p>Usually, it takes a type and a Payload. </p>
    </div>
  )
}
