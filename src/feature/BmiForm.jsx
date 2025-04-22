import { useDispatch, useSelector } from 'react-redux'
import { updateInput, calculateResult } from '../components/formSlice'

function BmiForm() {
  const dispatch = useDispatch()
  const { formData, result } = useSelector(state => state.form)

  const handleChange = (e) => {
    dispatch(updateInput({ name: e.target.name, value: e.target.value }))
  }

  const handleCalculate = () => {
    dispatch(calculateResult())
  }

  return (
    <div>
      <h2>Tính BMI</h2>
      <input
        type="number"
        name="weight"
        placeholder="Cân nặng (kg)"
        value={formData.weight}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="height"
        placeholder="Chiều cao (m)"
        value={formData.height}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleCalculate}>Tính BMI</button>
      <br />
      {result && <p>BMI của bạn: <strong>{result}</strong></p>}
    </div>
  )
}

export default BmiForm
