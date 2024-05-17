import { Link } from "react-router-dom"

function SideCart() {

  return (
    <>
      <div className="w-40 h-full bg-orange-500">
        <Link to={'cart'}>Cart</Link>
      </div>
    </>
  )
}

export default SideCart