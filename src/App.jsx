import React, { useState } from 'react'

function App(){
  const [count, setCount] = useState(99)
  return(
    <div className="app">
      <h2>Hello React {count}</h2>

      <button onClick={e=> setCount(count+1)}>+1</button>
    </div>
  )
}

export default App