import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    else {
      setCounter(counter);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else {
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <h1><button
        onClick={addValue}
      >+</button></h1>
      <br />
      <h1><button
        onClick={removeValue}
      >-</button></h1>

    </>
  )
}

export default App
