import { Link } from "react-router-dom";
import logo from '../media/logo.png';

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function calculateTotals(cart) {
  let cartTotalItems = 0
  let cartTotalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    cartTotalItems = cartTotalItems + cart[i].quantity
    cartTotalPrice = cartTotalPrice + (cart[i].product.price * cart[i].quantity)
  }
  return { items: cartTotalItems, price: cartTotalPrice }
}

function Nav({categories, cart}) {

  const totals = calculateTotals(cart)

  return (
    <>
      <div className="navbar bg-yellow-200 min-h-32 max-h-32">
        <div className="flex-1 pl-6 p-2 h-40">
          <Link to='/'>
            <img src={logo} alt="" className="h-32 p-2"/>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex flex-row gap-8 pr-12 items-center">
            
            <li>
              <ul className="flex flex-row gap-12 pr-12 text-xl">
                {categories.map((categorie) => { 
                        if (categorie !== 'electronics') {
                          return (
                          <li key={categorie}>
                            <Link to={`categorie/${categorie}`}>{categorie}</Link>
                          </li> 
                          )}

                      })}
              </ul>

            </li>
            <li>
              <Link to={'cart'}>
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">{totals.items}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav