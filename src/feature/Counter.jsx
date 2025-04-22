import { useDispatch, useSelector } from 'react-redux'
import { increment, reset, incrementByAmount } from '../components/counterSlice2'
import { useState } from 'react'

function Counter() {
  const count = useSelector(state => state.counter2.value)
  const dispatch = useDispatch()
  const [step, setStep] = useState("")

  const handleStepChange = (e) => {
    setStep(e.target.value)
  }

  const handleIncrementByAmount = () => {
    const stepNumber = parseInt(step)
    if (!isNaN(stepNumber)) {
      dispatch(incrementByAmount(stepNumber))
      setStep("")
    }
  }

  return (
    <div>
      <h2>Giá trị: {count}</h2>
      <button onClick={() => dispatch(increment())}>Tăng +1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br /><br />
      <input
        type="number"
        value={step}
        onChange={handleStepChange}
        placeholder="Nhập số"
      />
      <button onClick={handleIncrementByAmount}>Tăng theo số</button>
    </div>
  )
}

export default Counter
