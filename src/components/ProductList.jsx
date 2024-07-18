import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { ShoppingCartPlusIcon } from './icons/ShoppingCartPlusIcon'
import { ShoppingCartXIcon } from './icons/ShoppingCartXIcon'

export const ProductList = ({ products }) => {
  const { isAuthenticated, handleOpenModal, handleActualProduct } = useLogin()
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
                <article
                  key={product.id} className=' rounded-t-md overflow-hidden border-secondaryLight rounded-md shadow-lg
                dark:shadow-[0_8px_6px_-6px_rgba(167,170,185,0.1)]'
                >
                  <Link to={`/products/${product.id}`}>
                    <img
                      className=' w-full aspect-[1/1] object-contain bg-bgImgGray dark:bg-secondaryDark'
                      src={product.image} alt={`Image of ${product.name}`}
                    />
                  </Link>
                  <div className='flex flex-col gap-2 px-6 py-3'>
                    <div className=' flex gap-2 justify-between items-center'>
                      <span className='h-9 text-2xl font-semibold'>{`$${product.price}`}</span>
                      <span className=' w-20 flex justify-center border border-primary px-2 py-1 leading-3 h-fit rounded-md
                      text-xs opacity-90 font-medium'
                      >{`${product.category[0].toUpperCase()}${product.category.slice(1)}`}
                      </span>
                    </div>
                    <h3 className=' h-12 flex items-center text-base font-medium'>{product.name}</h3>
                    <button
                      onClick={() => {
                        if (isAuthenticated) {
                          isInCart
                            ? removeFromCart(product)
                            : addToCart(product)
                        } else {
                          handleOpenModal('products')
                          handleActualProduct(product)
                        }
                      }} className=' w-full flex justify-center items-center gap-1
                    bg-primary px-3 py-1 rounded-md text-base font-medium'
                    >{isInCart ? <ShoppingCartXIcon /> : <ShoppingCartPlusIcon />}
                      <span>{isInCart ? 'Remove From Cart' : 'Add To Cart'}</span>
                    </button>
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
