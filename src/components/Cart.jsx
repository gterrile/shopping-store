/* eslint-disable no-unused-vars */
import { useOutletContext } from "react-router-dom"



function Cart() {
  const [[products, setProducts],[cart, setCart]] = useOutletContext()

  function handleDeleteCartItem(item) {
    setCart(cart.filter(element => element.product.id !== item.product.id))
  }

  function handleCartItemChange(event, item) {
    console.log(event.target.value, item.product.title)
    const newCart = cart.map(element => {
      if (element.product.id === item.product.id) {
        return {product: element.product, quantity: parseInt(event.target.value)}
      } else {
        return element
      }
    })
    setCart(newCart)
  }

  return (
    <>
      <div>
        <h1>Cart</h1>
        <ul className="flex flex-col place-content-center">
          {cart.map((item) => {
            return <li 
              key={item.product.id} 
              className="flex flex-col items-center">
                <h2>{item.product.title}</h2>
                <img src={item.product.image} className="size-1/6"></img>
                <h2>item price: $ {item.product.price}</h2>
                
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name='quantity' min='1' max='1000'
                  value={item.quantity}
                  onChange={(e) => {handleCartItemChange(e, item)}} 
                  placeholder={`${item.quantity}`}/>
                <button onClick={() => {handleDeleteCartItem(item)}}>Delete</button>
                <h2>total price: $ {item.product.price * item.quantity}</h2>
              </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Cart