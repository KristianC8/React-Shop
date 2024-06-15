import { useLoaderData } from 'react-router-dom'
// import './DetailProductPage.css'

export const DetailProductPage = () => {
  const { product } = useLoaderData()
  console.log(product)

  return (
    <section className='detailProduct flex justify-center items-center min-h-screen-dvh '>
      <article className='detailProduct-card w-10/12 bg-cyan-600 flex px-20 py-12 rounded-md h-[80dvh]'>
        <div className='flex gap-4 w-[60%]'>
          <aside className='w-[20%]'>
            <ul className=' grid grid-cols-1 grid-rows-4 h-full justify-start gap-1'>
              {product.images.map((img, ind) => (
                <li key={ind}><img className=' w-full aspect-[1/1] bg-gray-500' src={img} alt={`Image of ${product.title}`} /></li>
              ))}
            </ul>
          </aside>
          <img src='' alt='' className='w-full aspect-[1/1] bg-gray-500' />
        </div>
        <div className='w-[40%]'>
          Detail
          <h2>{product.title}</h2>
          <span className=' w-20 flex justify-center border border-cyan-600 px-2 py-1 leading-3 h-fit rounded-md text-xs opacity-90'>{`${product.category[0].toUpperCase()}${product.category.slice(1)}`}</span>
        </div>

      </article>
    </section>
  )
}
