import React, { useState } from 'react';

const Form = () => {
  const [ value, setValue ] = useState('')

  return(
    <form>
      <input
        type = "text"
        placeholder = "Enter text here"
        onChange = {(e) => setValue(event.target.value)}
      />
      <button type = "submit">Submit</button>
    </form>
  )
}

export default Form;