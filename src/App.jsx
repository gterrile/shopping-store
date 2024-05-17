import SideCart from './components/SideCart'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [ products, setProducts] = useState([])
  const [ categories, setCategories ] = useState([])

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

  console.log(categories)

  return (
    <>
      <Nav categories={categories}></Nav>
      <Outlet context={[products, setProducts]}></Outlet>
      <SideCart />
    </>
  )
}

export default App
