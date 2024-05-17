/* eslint-disable react/prop-types */
import { Link, useOutletContext } from "react-router-dom"

function SideCart({cart, setCart}) {

  return (
    <>
      <div className="w-40 h-full bg-orange-500">
        <Link to={'cart'}>Cart</Link>
        <h2>{cart.length}</h2>
      </div>
    </>
  )
}

export default SideCart