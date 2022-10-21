import { useState } from "react";

import React from 'react'

export default function UseStateExample() {
    const [name,setName] = useState("India");
  return (
    <div>
        <h4>The Word is {name}</h4>
        <button onClick={() => setName("T20 World-Cup")}>Click</button>
    </div>
  )
}
