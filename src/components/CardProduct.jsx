import { useCart } from '../hooks/useCart'

export const CardProduct = ({ name, price, images, category, prod }) => {
  const { cart, addToCart } = useCart()
  console.log(cart)
  return (
    <article className=' rounded-t-md border-2 overflow-hidden border-zinc-900 rounded-md'>
      <img className=' w-full aspect-[1/1] object-contain bg-zinc-400' src={images} alt={`Image of ${name}`} />
      <div className='flex flex-col gap-2 px-6 py-3'>
        <div className=' flex gap-2 justify-between items-center'>
          <span className='h-9 text-2xl font-semibold'>{`$${price}`}</span>
          <span className=' w-20 flex justify-center border border-cyan-600 px-2 py-1 leading-3 h-fit rounded-md text-xs opacity-90'>{category}</span>
        </div>
        <h3 className=' h-12 flex items-center text-base'>{name}</h3>
        <button onClick={() => { addToCart(prod) }} className=' w-full bg-cyan-600 px-3 py-1 rounded-md'>Add To Cart</button>
      </div>
    </article>
  )
}
