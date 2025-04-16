import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../components/counterSlice'

function UseReduxCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <span>{count}</span><br />
      <button style={{ backgroundColor: 'green' }} onClick={() => dispatch(increment())}>Cong</button>
      <button style={{ backgroundColor: 'red' }} onClick={() => dispatch(decrement())}>Tru</button>
    </>
  )
}

export default UseReduxCounter

