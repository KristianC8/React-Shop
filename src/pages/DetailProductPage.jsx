import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
// import './DetailProductPage.css'

export const DetailProductPage = () => {
  const { mappedProduct } = useLoaderData()
  const [principalImg, setPrincipalImg] = useState(mappedProduct.images[0])
  const { cart, addToCart, removeFromCart } = useCart()
  const isItemInCart = (product) => cart.some(item => item.id === product.id)
  const isInCart = isItemInCart(mappedProduct)
  console.log(mappedProduct)

  return (
    <section className='detailProduct flex justify-center bg-zinc-950 items-center min-h-screen-dvh '>
      <article className='detailProduct-card w-9/12 bg-zinc-900 flex flex-col lg:flex-row gap-10 px-20 py-12 rounded-md h-[80dvh] border border-zinc-800'>
        <div className='flex gap-4 w-[60%]'>
          <aside className='w-[20%]'>
            <ul className=' grid grid-cols-1 grid-rows-4 h-fit justify-start gap-4'>
              {mappedProduct.images.map((img, ind) => (
                <li key={ind}>
                  <img
                    className={`w-full aspect-[1/1] bg-zinc-400 rounded-md ${principalImg === img ? ' opacity-60' : ''}`}
                    src={img}
                    alt={`Image of ${mappedProduct.name}`}
                    onClick={() => {
                      setPrincipalImg(img)
                    }}
                  />
                </li>
              ))}
            </ul>
          </aside>
          <img src={principalImg} alt={`Image of ${mappedProduct.name}`} className='w-full aspect-[1/1] bg-zinc-400 rounded-md' />
        </div>
        <div className='detailProduct-info w-[40%] flex flex-col justify-around py-6 2xl:py-32'>
          <h2 className='text-3xl'>{mappedProduct.name}</h2>
          <p className='text-xl'>{`$${mappedProduct.price}`}</p>
          <div>
            <span>Description:</span>
            <p className='text-sm'>{mappedProduct.description}</p>
          </div>
          <div>
            <span>Category:</span>
            <span className=' w-fit flex justify-center border border-cyan-600 mt-2 px-2 py-2 leading-3 h-fit rounded-md text-md opacity-90'>{`${mappedProduct.category[0].toUpperCase()}${mappedProduct.category.slice(1)}`}</span>
          </div>
          <button
            className=' w-full bg-cyan-600 px-3 py-1 rounded-md'
            onClick={() => { isInCart ? removeFromCart(mappedProduct) : addToCart(mappedProduct) }}
          >{isInCart ? 'Remove From Cart' : 'Add To Cart'}
          </button>
        </div>

      </article>
    </section>
  )
}
