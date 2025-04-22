import { createSlice } from '@reduxjs/toolkit'

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: []
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push({ ...action.payload, id: Date.now() })
    },
    editEvent: (state, action) => {
      const { id, data } = action.payload
      const index = state.events.findIndex(e => e.id === id)
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...data }
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(e => e.id !== action.payload)
    }
  }
})

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions
export default eventSlice.reducer
