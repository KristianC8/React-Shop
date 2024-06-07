import './Cart.css'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

export const CardCart = ({ name, price, quantity, image }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span>{price}</span><small>Qty:{quantity}</small>
      <button>+</button>
    </li>
  )
}

export const Cart = () => {
  const cartToggle = useId()
  const { cart, clearCart } = useCart()
  return (
    <>
      <input type='checkbox' id={cartToggle} className='cart-toggle' />
      <label htmlFor={cartToggle} className='cart-button'>Shop Cart</label>
      <div className='cart-panel'>
        <label htmlFor={cartToggle} className='close-cart'>Cerrar</label>
        <ul>
          {
            cart && cart.map(product => (
              <CardCart key={product.id} {...product} />
            ))
           }
        </ul>
        <button onClick={clearCart}>Clear</button>
      </div>
    </>

  )
}
