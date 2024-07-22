export const getDetailProduct = async ({ params }) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`)
    if (!response.ok) throw new Error('No fue posible acceder a la Api')
    const product = await response.json()
    const mappedProduct = {
      id: product.id,
      name: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.thumbnail,
      images: product.images,
      stock: product.stock
    }
    return { mappedProduct }
  } catch (error) {
    console.error(error)
  }
}
