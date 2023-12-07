
import './App.css'
import Cart from './Components/CartPage/Cart'
import Form from './Components/Form/Form'
import NavBar from './Components/Header/NavBar'
import Product from './Components/Product.jsx/Product'

function App() {
  
  return (
    <>
      <NavBar />
      <Product/>
      <Cart />
      <Form /> 
    </>
  )
}

export default App
