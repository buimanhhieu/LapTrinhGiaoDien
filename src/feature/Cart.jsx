import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, updateQuantity } from '../cartSlice'

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h2>🛒 Giỏ hàng</h2>
      <button onClick={() => dispatch(addItem({ id: 1, name: 'Cà phê sữa', price: 30000, quantity: 1 }))}>
        + Thêm Cà phê sữa
      </button>
      <button onClick={() => dispatch(addItem({ id: 2, name: 'Trà đào', price: 25000, quantity: 1 }))}>
        + Thêm Trà đào
      </button>

      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price} = {item.quantity * item.price}đ
            <button onClick={() => dispatch(removeItem(item.id))}>❌</button>
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
            />
          </li>
        ))}
      </ul>

      <p><strong>Tổng số lượng:</strong> {totalQuantity}</p>
      <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ</p>
    </div>
  )
}

export default Cart
