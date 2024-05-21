import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [ products, setProducts] = useState([])
  const [ categories, setCategories ] = useState([])
  const [ cart, setCart ] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      
      const response = await fetch('https://fakestoreapi.com/products')
      const json = await response.json()
      setProducts(json)
    }
    const fetchCaterogies = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const json = await response.json()
      setCategories(json)
    }

    fetchProducts()
    fetchCaterogies()
  },[])
  console.log(products)
  return (
    <>
      <Nav categories={categories} cart={cart}></Nav>
      <Outlet context={[[products, setProducts],[cart, setCart]]}></Outlet>
    </>
  )
}

export default App
