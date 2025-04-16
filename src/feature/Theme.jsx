import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../components/themeSlice'

function Theme() {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Chế độ hiện tại: {theme}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
      </button>
    </div>
  )
}

export default Theme
