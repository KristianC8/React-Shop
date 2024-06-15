import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'

export const ProductList = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart()
  const isItemInCart = (product) => cart.some(item => item.id === product.id)
  // console.log(cart)
  return (
    products?.length > 0
      ? (
        <div className='products-grid w-full grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,minmax(220px,_1fr))]'>
          {
            products.map(product => {
              const isInCart = isItemInCart(product)
              // const slug = product.name.split(' ').join('-')
              return (
                <article key={product.id} className=' rounded-t-md border-2 overflow-hidden border-zinc-900 rounded-md'>
                  <Link to={`/products/${product.id}`}>
                    <img className=' w-full aspect-[1/1] object-contain bg-zinc-400' src={product.image} alt={`Image of ${product.name}`} />
                  </Link>
                  <div className='flex flex-col gap-2 px-6 py-3'>
                    <div className=' flex gap-2 justify-between items-center'>
                      <span className='h-9 text-2xl font-semibold'>{`$${product.price}`}</span>
                      <span className=' w-20 flex justify-center border border-cyan-600 px-2 py-1 leading-3 h-fit rounded-md text-xs opacity-90'>{`${product.category[0].toUpperCase()}${product.category.slice(1)}`}</span>
                    </div>
                    <h3 className=' h-12 flex items-center text-base'>{product.name}</h3>
                    <button onClick={() => { isInCart ? removeFromCart(product) : addToCart(product) }} className=' w-full bg-cyan-600 px-3 py-1 rounded-md'>{isInCart ? 'Remove From Cart' : 'Add To Cart'}</button>
                  </div>
                </article>
              )
            })

              }
        </div>
        )
      : <p>No hay productos disponibles...</p>
  )
}
