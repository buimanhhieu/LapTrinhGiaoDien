import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addEvent, editEvent, deleteEvent } from '../components/eventSlice'

function EventManager() {
  const events = useSelector(state => state.events.events)
  const dispatch = useDispatch()

  const [form, setForm] = useState({ title: '', date: '' })
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.title || !form.date) return
    if (isEditing) {
      dispatch(editEvent({ id: editId, data: form }))
      setIsEditing(false)
      setEditId(null)
    } else {
      dispatch(addEvent(form))
    }
    setForm({ title: '', date: '' })
  }

  const handleEdit = (event) => {
    setForm({ title: event.title, date: event.date })
    setIsEditing(true)
    setEditId(event.id)
  }

  return (
    <div>
      <h2>Quản lý sự kiện</h2>
      <input
        type="text"
        name="title"
        placeholder="Tên sự kiện"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {isEditing ? 'Cập nhật' : 'Thêm sự kiện'}
      </button>

      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} - {event.date}
            <button onClick={() => handleEdit(event)}>Sửa</button>
            <button onClick={() => dispatch(deleteEvent(event.id))}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventManager
