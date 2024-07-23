import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { ShoppingCartPlusIcon } from './icons/ShoppingCartPlusIcon'
import { ShoppingCartXIcon } from './icons/ShoppingCartXIcon'
import toast, { Toaster } from 'react-hot-toast'
import 'tailwindcss/tailwind.css'

export const ProductList = ({ products }) => {
  const { isAuthenticated, handleOpenModal, handleActualProduct } = useLogin()
  const { cart, addToCart, removeFromCart } = useCart()
  const isItemInCart = (product) => cart.some(item => item.id === product.id)
  const notifyAddCart = () => toast.success('successfully added to cart', {
    duration: 2000,
    position: 'bottom-center',
    className: 'bg-primaryLight dark:bg-zinc-900 text-primaryDark dark:text-primaryLight 2xl:text-2xl',
    iconTheme: {
      primary: '#0891b2',
      secondary: '#fff'
    }
  })

  return (
    products?.length > 0
      ? (
        <div className='products-grid w-full grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,minmax(220px,_1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]'>
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
                  <div className='flex flex-col gap-2 2xl:gap-4 px-6 py-3'>
                    <div className=' flex gap-2 justify-between items-center'>
                      <span className='h-9 text-2xl 2xl:text-4xl font-semibold'>{`$${product.price}`}</span>
                      <span className=' w-20 2xl:w-fit flex justify-center border border-primary px-2 py-1 leading-3 h-fit rounded-md
                      text-xs 2xl:text-base opacity-90 font-medium'
                      >{`${product.category[0].toUpperCase()}${product.category.slice(1)}`}
                      </span>
                    </div>
                    <h3 className=' h-12 flex items-center text-base 2xl:text-xl font-medium'>{product.name}</h3>
                    <button
                      onClick={() => {
                        if (product.stock === 0) return
                        if (isAuthenticated) {
                          if (isInCart) {
                            removeFromCart(product)
                          } else {
                            addToCart(product)
                            notifyAddCart()
                          }
                        } else {
                          handleOpenModal('products')
                          handleActualProduct(product)
                        }
                      }} className={`${product.stock === 0 ? 'bg-cyan-950' : 'bg-primary'} w-full flex justify-center items-center gap-1
                     2xl:gap-4 px-3 py-1 rounded-md text-base 2xl:text-2xl font-medium`}
                    >{isInCart ? <ShoppingCartXIcon /> : <ShoppingCartPlusIcon />}
                      <span>{product.stock === 0 ? 'Out of Stock' : isInCart ? 'Remove From Cart' : 'Add To Cart'}</span>
                    </button>

                  </div>
                </article>
              )
            })

              }
          <Toaster />
        </div>
        )
      : <p>No hay productos disponibles...</p>
  )
}
