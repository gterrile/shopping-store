import { Link } from "react-router-dom";

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
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-2xl">Home</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-8 py-4 pr-4 items-center">
            
            <li>

              <div className="dropdown dropdown-left dropdown-hover p-0">
                <div tabIndex={0} role="button" className="btn m-1">Shop</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  {categories.map((categorie) => { 
                      return (
                        <li key={categorie}>
                          <Link to={`categorie/${categorie}`}>{categorie}</Link>
                        </li> 
                      )
                    })}
                </ul>
              </div>  

            </li>
            <li>
              <Link to={'cart'}>
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
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