import { useSelector, useDispatch } from 'react-redux'
import { login, logout, setUserInfo } from '../components/authSlice'
import { useRef } from 'react'

function Auth() {
  const { user, isLoggedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()
     const name=useRef("");
  const handleLogin = () => {
    const userInfo = { name: 'Hiếu', email: 'Hieu@gmail.com' }
    dispatch(login(userInfo))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleUpdateUserInfo = () => {
    const newUserInfo = { name: name.current.value, email: 'Hieu@gmail.com' }
    dispatch(setUserInfo(newUserInfo))
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Chào mừng, {user.name}!</h2>
          <button onClick={handleLogout}>Đăng xuất</button>
          <input type="text" ref={name}/>
          <button onClick={handleUpdateUserInfo}>Cập nhật thông tin</button>
        </div>
      ) : (
        <div>
          <h2>Đăng nhập để tiếp tục</h2>
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  )
}

export default Auth
