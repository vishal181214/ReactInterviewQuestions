import React from 'react'
import { useMemo,useState } from 'react';
export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        return num;
      };

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  
  return (
    <><div>
          <h4>My Todos</h4>
          {todos.map((todo, index) => {
              return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
      </div><hr /><div>
              Count: {count}
              <button onClick={increment}>+</button>
              <h4>Expensive Calculation</h4>
              {calculation}
          </div>
    </>
    
  )
}
