import React from 'react'
import UseMemo from './UseMemo';
import { useState,useRef,useEffect } from 'react';
import { LifeCycle } from './LifeCycle';
export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });
  return (
    <div>
        <h3>What is UseRef Hook ?(Implementation)</h3>
            <p>The useRef Hook allows you to persist values between renders.</p>
            <p>It can be used to store a mutable value that does not cause a re-render when updated.</p>
            <p>It can be used to access a DOM element directly.</p>
            <input type="text" value={inputValue}onChange={(e) => setInputValue(e.target.value)}/><br/>
            <h3>Render Count: {count.current}</h3>

        <h3>What is UseMemo Hook ?(Implementation)</h3>
            <p>The React useMemo Hook returns a memoized value.</p>
            <p>Think of memoization as caching a value so that it does not need to be recalculated.</p>
            <p>The useMemo Hook only runs when one of its dependencies update.</p>
            <p>This can improve performance.</p>
            <UseMemo />

        <h3>What is Context api ?</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that<br/> can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a<br/> 
               component that as it's names suggests provides the state to its children. It will hold the<br/> 
               "store" and be the parent of all the components that might need that store. Consumer as it<br/> 
               so happens is a component that consumes and uses the state.</p>

        <h3>What are React Life cycles Explain each one with Example ?</h3>
            <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.</p>
            <p>The three phases are: Mounting, Updating, and Unmounting.</p>
            <p>In React, components go through a lifecycle of events:</p>
            <p>Mounting (adding nodes to the DOM)</p>
            <p>Updating (altering existing nodes in the DOM)</p>
            <p>Unmounting (removing nodes from the DOM)</p>
            <h3>Mounting Phase</h3>
            <p>In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods.</p>
            <h5>componentWillMount()</h5>
            <p>This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.</p>
            <h5>componentDidMount()</h5>
            <p>This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.</p>
            <h5>render()</h5>
            <p>This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.</p>
            <h5>Updating Phase</h5>
            <p>It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy. The main aim of this phase is to ensure that the component is displaying the latest version of itself.</p>
            <h5>componentWillRecieveProps()</h5>
            <p>It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using this.setState() method.</p>
            <h5>shouldComponentUpdate()</h5>
            <p>It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.</p>
            <h5>componentWillUpdate()</h5>
            <p>It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false.</p>
            <h5>render()</h5>
            <p>It is invoked to examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.</p>
            <h5>componentDidUpdate()</h5>
            <p>It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.</p>

            <h5>Unmounting Phase</h5>
            <p>It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. This phase contains only one method and is given below.</p>
            <h5>componentWillUnmount()</h5>
            <p>This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.</p>        
            <LifeCycle />  

        <h3>What is Props Drilling Concept ?What is State Uplifting ?</h3> 
            <p>Prop Drilling is the process by which you pass data from one part of the React Component tree to another by going through other parts that do not need the data but only help in passing it around.</p>
            <p>Prop drilling is similar: You pass data (props) from some FirstComponent to another SecondComponent - which doesn't need the data to render but only passes it to another ThirdComponent, which also doesn't need it and may pass it to another FourthComponent. This may continue until the data gets to the ComponentNeedingProps.</p>
            <p>In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.</p>
        
        <h3>Difference between useEffect and useContext ?</h3>
            <p>The useEffect() hook lets you perform side effects, or modification to some sort of state.</p>
            <p>The useContext() hook is used to create common data that can be easily shared amongst components without having to pass props manually to each level.</p>
            <p>useEffect is a hook for encapsulating code that has side effects</p>
            <p>useContext is a hook for getting broadly shared application data from context providers. </p>
            <p>useEffect is used to change the state on change in dependency. </p>
            <p>The useContext is used to manage global data, e.g. global state, theme, services, user settings, and more.</p>
            <p>useEffect takes two argument one is callback function and dependency.</p>
            <p>useContext takes one argument</p>
            
        <h3>Difference between callback and useCallback Hook ?</h3>
            <p>The purpose of this callback function is to change a piece of the state that is a part of the parent component.</p>
            <p>useCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies that set the parameters.</p>
    </div>
  )
}
