import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'bmiForm',
  initialState: {
    formData: {
      weight: '',
      height: ''
    },
    result: null
  },
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload
      state.formData[name] = value
    },
    calculateResult: (state) => {
      const { weight, height } = state.formData
      const w = parseFloat(weight)
      const h = parseFloat(height)
      if (!isNaN(w) && !isNaN(h) && h > 0) {
        const bmi = w / (h * h)
        state.result = bmi.toFixed(2)
      } else {
        state.result = null
      }
    }
  }
})

export const { updateInput, calculateResult } = formSlice.actions
export default formSlice.reducer
