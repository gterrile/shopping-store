/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ProductItem({product, cart, setCart}) {
  
  function handleAddToCart(product) {
    // empty cart case
    if (!cart.length) {
      setCart(current => [... current, {product: product, quantity: 1}])
    } else {
      // item already in cart. Update quantity
      if (cart.some((item) => item.product.id === product.id)) {
        const newCart = cart.map(item => {
          if (item.product.id === product.id) {
            return {product: item.product, quantity: parseInt(item.quantity) + 1}
          } else {
            return item
          }
        })
        setCart(newCart)
      } else {
        // new item
        setCart(current => [... current, {product: product, quantity: 1}])
      }  
    }
  }

  return (
    <li key={product.id} className="flex flex-col  w-96 items-center">
    <h2 className="text-3xl">{product.title}</h2><br />
    <p>{product.description}</p><br />
    <img src={product.image} alt="" className="size-1/2"/>
    <h2 className="text-xl text-orange-400 font-bold">price: {product.price}</h2>
    <button onClick={() => { handleAddToCart(product) }}>Add to Cart</button>
  </li>
  )
}

export default ProductItem

