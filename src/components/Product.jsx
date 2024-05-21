/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useOutletContext, useParams } from "react-router-dom"
import ProductItem from "./ProductItem"

function Product() {

  const [[products, setProducts],[cart, setCart]] = useOutletContext()
  const { name } = useParams()

  return (
    <div className="flex flex-col w-full h-full 
      bg-slate-600 overflow-scroll gap-10">
      <h1>{name}</h1>
      <ul className="flex flex-col items-center gap-4">
        {
          products.map((product) => {
            if (product.category === name) {
              return (
                <ProductItem key={product.id} product={product} 
                  cart={cart}
                  setCart={setCart}>
                </ProductItem>
              )     
            }
          })
        }
      </ul>
    </div>
  )
}

export default Product