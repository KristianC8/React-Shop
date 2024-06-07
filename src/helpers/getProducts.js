export const getProducts = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Status ${response.status}: ${(response.statusText) || 'No fue posible acceder a la api'}`)
    const { products } = await response.json()
    const allProducts = products.filter(product => (
      product.category === 'laptops' ||
            // product.category === 'smartphones' ||
            product.category === 'tablets' ||
            product.category === 'mobile-accessories' ||
            product.category === 'mens-watches' ||
            product.category === 'womens-watches' ||
            product.category === 'motorcycle'
            // product.category === 'vehicle'
    ))
    const mappedData = allProducts.map(product => (
      {
        id: product.id,
        name: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.thumbnail
      }
    ))
    return mappedData
  } catch (error) {
    console.error(error)
  }
}
