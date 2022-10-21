import React from 'react'
import { useReducer } from 'react';


// The useReducer Hook is used to store and update states, just like 
// the useState Hook. 
// The useReducer(reducer, initialState) hook accept 2 arguments: 
// the reducer function and the initial state. The hook then returns 
// an array of 2 items: the current state and the dispatch function.

export default function UseReducerExample() {

    const initialState = { count: 0 }
    // The reducer function
    function reducer(state, action) {
        switch (action.type) {
            case 'inc':
                return { count: state.count + 1 }
            case 'dec':
                return { count: state.count - 1 }
            case 'reset':
                return { count: state.count = 0 }
            default:
                return { count: state.count }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <br />
            <br />
            <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    );
}
