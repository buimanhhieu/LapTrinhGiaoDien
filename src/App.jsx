import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texta, seta] = useState(0)
  const [textb, setb] = useState(0)
  const [sum, setSum] = useState(0)
  function handleA(e){
    seta(e.target.value);
  }
  function handleB(e){
    setb(e.target.value);
  }
  function handleClick(){
    let c = parseInt(texta)+parseInt(textb)
    setSum(c);
  }

  return (
    <>
      <input onChange={handleA} type="text"  />
      <br />
      <input onChange={handleB} type="text"  />
      <br />
      <button onClick={handleClick}>Sum</button>
      <br />
      <span>{sum}</span>
    </>
  )
}

export default App
