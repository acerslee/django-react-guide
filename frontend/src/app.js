import React, { useState } from 'react';
import Form from './components/form';

export default function App() {
  const [ count, setCount ] = useState(0)

  const onClick = () => setCount(count + 1)

  return(
    <div>
      <h1>The count is currently {count}</h1>
      <button onClick = {onClick}>Increase count</button>
      <Form />
    </div>
  )
}