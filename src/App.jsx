import { useState, useEffect } from 'react'
import axios from "axios"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  // Get products from db
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  // async function getProducts() {
  //   try {
  //     const response = await fetch('https://fakestoreapi.com/products')
  //     const data = await response.json()
  //     setProducts(data)
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  async function getProducts() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      const data = response.data 
      setProducts(data)
    }
    catch (error) {
      console.log(error)
    }
  }


  // Cart products
  const [cart, setCartItems] = useState([])

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {

      if (prevItems.find(item => item.id === product.id)) {

        return prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity+quantity} : item)
      }

      return [...prevItems, {...product, quantity}]
    })
  }

  const removeFromCart = (product) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== product.id)
    )
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path='/products/:id' element={<ProductDetails addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
