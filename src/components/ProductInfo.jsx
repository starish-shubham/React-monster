//6

const ProductInfo = () => {
    const product = {
        name: "Sample Product",
        price: 29.99,
        description: "This is a sample product description.",
        inStock: true
    };
  return (
    <div>
      <p>Produce name: {product.name}</p>
      <p>Produce name: {product.price}</p>
      <p>Produce name: {product.description}</p>
      <p>Produce name: {product.inStock}</p>
    </div>
  )
}

export default ProductInfo
