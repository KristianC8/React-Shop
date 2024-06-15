export const getDetailProduct = async ({ params }) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`)
    if (!response.ok) throw new Error('No fue posible acceder a la Api')
    const product = await response.json()
    return { product }
  } catch (error) {
    console.error(error)
  }
}
