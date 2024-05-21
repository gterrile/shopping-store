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
    <li key={product.id} className="card w-1/3 shadow-xl text-black bg-white">
      <div >
        <figure className="p-4"><img src={product.image} className="size-1/2 mt-2" 
          alt={product.description} /></figure>
        <div className="card-body gap-4 p-6">
          <h2 className="card-title font-bold">{product.title}</h2>
          <div className="max-h-28 overflow-scroll product-description">
            <p>{product.description}</p>
          </div>

          <div className="card-actions justify-between items-center">
            <h3 className="text-2xl text-blue-500 font-bold pl-2">$ {product.price}</h3>
            {cart.some(item => item.product.id === product.id) ? (
              <button onClick={() => { handleAddToCart(product) }} 
                className="btn bg-green-400 hover:bg-green-500 border-none text-white text-lg font-bold w-48">
                  In cart
              </button>
              ) : (
                <button onClick={() => { handleAddToCart(product) }} 
                className="btn bg-orange-400 hover:bg-orange-500 border-none text-white text-lg font-bold w-48">
                  Add to Cart
              </button>
              )
            }
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductItem

