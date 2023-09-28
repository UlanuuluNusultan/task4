import React from 'react'
import Home from './pages/Home'
import Cart from './components/cart/Cart'
import { CartProvider } from 'react-use-cart'

const App = () => {
  return (
    <div>
      <div style={{width:'1000px', margin:' 0 auto'}}> <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
      </div>
     
    </div>
  )
}

export default App