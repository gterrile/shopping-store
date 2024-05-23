/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"

function calculateTotals(cart) {
  let cartTotalItems = 0
  let cartTotalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    cartTotalItems = cartTotalItems + cart[i].quantity
    cartTotalPrice = cartTotalPrice + (cart[i].product.price * cart[i].quantity)
  }
  return { items: cartTotalItems, price: cartTotalPrice }
}

function Cart() {
  const [[products, setProducts],[cart, setCart]] = useOutletContext()
  const [ screenWidth, setScreenWidth ] = useState(window.screen.width)

  const totals = calculateTotals(cart)

  function handleDeleteCartItem(item) {
    setCart(cart.filter(element => element.product.id !== item.product.id))
  }

  function handleCartItemChange(event, item) {
    const newCart = cart.map(element => {
      if (element.product.id === item.product.id) {
        return {product: element.product, quantity: parseInt(event.target.value)}
      } else {
        return element
      }
    })
    setCart(newCart)
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width)
      console.log('width', screenWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {removeEventListener('resize', handleResize)}
  },[screenWidth])

  const styleFooterWide = 'footer fixed bottom-12 h-32 w-3/4 bg-orange-700 z-1 flex justify-around items-center opacity-75'
  const styleFooterNarrow = 'footer fixed bottom-0 left-0 p-4 h-40 min-w-96 bg-slate-300 z-1 flex flex-col justify-center items-center opacity-85'

  return (
    <>
      <div className="flex flex-col items-center justify-between h-full bg-slate-100 overflow-scroll">
        
        <ul className="flex flex-col gap-2 z-0 pt-12 pb-48">
          {cart.map((item) => {
            return <li key={item.product.id} 
              className="flex flex-row justify-between pr-4 bg-white text-black h-40 rounded-md">
                <div className="flex flex-row items-center">
                  
                  <div className="w-36 h-40 p-4 overflow-hidden flex flex-col items-center gap-2">
                    <img src={item.product.image} className="h-2/3 w-2/3"></img>
                    <button onClick={() => {handleDeleteCartItem(item)}} 
                      className="hover:underline text-xs font-bold text-red-500 w-24" >Delete
                    </button>
                  </div>

                  <div className="w-52 h-full text-left flex flex-col justify-start pt-8">
                    <h2 className="text-m font-bold">{item.product.title}</h2>
                    <h2 className="text-sm">each ${item.product.price}</h2>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 w-24">
                    <label htmlFor="quantity" className="text-sm">Quantity</label>
                    <input type="number" name='quantity' min='1' max='1000'
                      className="text-black bg-white"
                      value={item.quantity}
                      onChange={(e) => {handleCartItemChange(e, item)}} 
                      placeholder={`${item.quantity}`}/>
                  </div>

                </div>

                <div className='text-right w-56 font-bold flex flex-col justify-start pt-8 pr-6'>
                  <h2>Total</h2>
                  <h3>$ {item.product.price * item.quantity}</h3>
                </div>
              </li>
          })}
        </ul>
 
        <footer className={window.screen.width > 700 ? styleFooterWide : styleFooterNarrow}>
          <h1 className="text-3xl">{screenWidth > 500 ? 'YOUR ORDER' : ''}</h1>
          <div className={`flex ${screenWidth > 500 ? 'flex-row' : 'flex-col pb-6'} gap-4 items-center`}>
            <div className='flex flex-col items-end'>
              <h2>SUBTOTAL: ${totals.price.toFixed(2)}</h2>
              <h2>TAX: ${(totals.price * 0.12).toFixed(2)}</h2>
              <h2>TOTAL: ${(parseFloat(totals.price) + parseFloat(totals.price * 0.12)).toFixed(2)}</h2>
            </div>
            <button className="btn btn-outline text-lg">Proceed to Checkout</button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Cart