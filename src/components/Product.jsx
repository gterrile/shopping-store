/* eslint-disable react/prop-types */
import { useOutletContext, useParams } from "react-router-dom"

function Product() {

  const [[products, setProducts],[cart, setCart]] = useOutletContext()
  console.log(cart)
  const { name } = useParams()
  return (
    <div className="flex flex-col w-full h-full bg-slate-600 overflow-scroll gap-10">
      <h1>{name}</h1>
      <ul className="flex flex-col gap-4 items-center">
        {
          products.map((product) => {
            if (product.category === name) {
              return (
                <li key={product.id} className="flex flex-col  w-96 items-center">
                  <h2 className="text-3xl">{product.title}</h2><br />
                  <p>{product.description}</p><br />
                  <img src={product.image} alt="" className="size-1/2"/>
                  <h2 className="text-xl text-orange-400 font-bold">price: {product.price}</h2>
                  <button onClick={() => {
                    setCart(current => [...current, product.title])
                    }}>Add to Cart</button>
                </li>
              ) 
            }
          })
        }
      </ul>
    </div>
  )
}

export default Product