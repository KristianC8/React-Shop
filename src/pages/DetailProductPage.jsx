import { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
// import './DetailProductPage.css'

export const DetailProductPage = () => {
  const { mappedProduct } = useLoaderData()
  const [principalImg, setPrincipalImg] = useState(mappedProduct.images[0])
  const { cart, addToCart, removeFromCart } = useCart()
  const isItemInCart = (product) => cart.some(item => item.id === product.id)
  const isInCart = isItemInCart(mappedProduct)
  // console.log(mappedProduct)

  const navigate = useNavigate()

  const handleNavigateBack = () => {
    navigate(-1)
  }

  return (
    <section className='detailProduct flex justify-center bg-zinc-950 items-center min-h-screen-dvh py-4 lg:py-0'>
      <article className='detailProduct-card w-10/12 lg:w-9/12 bg-zinc-900 flex flex-col items-center lg:flex-row gap-x-8 px-4 lg:px-[6%] rounded-md h-fit lg:h-[80dvh] border border-zinc-800 relative py-4 lg:py-0 lg:max-h-[700px]'>
        <div className='flex flex-col-reverse gap-4 items-center lg:items-start lg:flex-row lg:gap-[2%] w-[85%] lg:w-[60%]'>
          <aside className='lg:min-w-16 lg:w-[15%]'>
            <ul className=' flex w-full lg:w-[initial] lg:grid grid-cols-1 grid-rows-4 lg:h-fit gap-4'>
              {mappedProduct.images.map((img, ind) => (
                <li key={ind}>
                  <img
                    className={`w-20 lg:w-full aspect-[1/1] object-cover cursor-pointer bg-zinc-400 rounded-md ${principalImg === img ? ' opacity-60' : ''}`}
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
          <img src={principalImg} alt={`Image of ${mappedProduct.name}`} className='w-full lg:w-[86%] aspect-[1/1] bg-zinc-400 rounded-md object-cover' />
        </div>
        <div className='detailProduct-info w-[85%] lg:w-[40%] flex flex-col gap-3 2xl:gap-6 lg:h-full lg:justify-center pt-4 md:pt-0'>
          <h2 className='text-2xl md:text-3xl font-bold'>{mappedProduct.name}</h2>
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
        <button
          className=' absolute top-2 right-2 bg-zinc-950 px-2 py-1 rounded'
          onClick={handleNavigateBack}
        >Back
        </button>
      </article>
    </section>
  )
}
