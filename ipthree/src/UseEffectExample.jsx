
import { useState, useEffect } from "react";

import React from 'react'

// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)
// useEffect runs on every render. That means that when the count changes, 
// a render happens, which then triggers another effect.

// 1. No dependency passed:
// useEffect(() => {
//   //Runs on every render
// });

// 2. An empty array:
// useEffect(() => {
//   //Runs only on the first render
// }, []);

// 3. Props or state values:
// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state]);

export default function UseEffectExample() {
  const [count,setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    },1000);
  });
    
  return (
    <div>
      <h3>The count is {count}</h3>
    </div>
  )
}
