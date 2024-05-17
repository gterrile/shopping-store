/* eslint-disable react/prop-types */
import { useOutletContext, useParams } from "react-router-dom"

function Product() {

  const [ products ] = useOutletContext()
  const { name } = useParams()
  console.log(products)
  return (
    <>
    <h1>{name}</h1>
      <ul>
        {
          products.map((product) => {
            if (product.category === name) {
              return (
                <li key={product.id}>
                  <h2>{product.title}</h2><br />
                  <p>{product.description}</p><br /><br /><br />
                </li>
              ) 
            }
          })
        }
      </ul>

    </>
  )
}

export default Product