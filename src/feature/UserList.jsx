import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../components/userSlice'

function UserList() {
  const dispatch = useDispatch()
  const { users, status, error } = useSelector(state => state.users)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  if (status === 'loading') return <p>Đang tải...</p>
  if (status === 'failed') return <p>Lỗi: {error}</p>

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
