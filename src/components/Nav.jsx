import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Nav({categories}) {

  return (
    <>
      <div className="w-40 h-full bg-cyan-500">
        <Link to='/' className="text-lg font-bold">Home</Link><br />
        <ul>
          {categories.map((categorie) => { 
            
            return (
              <li key={categorie}>
                <Link to={`categorie/${categorie}`}>{categorie}</Link>
              </li> 
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Nav