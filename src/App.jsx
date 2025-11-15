
import { Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home"
import Wishist from "./assets/pages/Wishist"
import Cart from "./assets/pages/Cart"
import View from "./assets/pages/View"
import Pnf from "./assets/pages/Pnf"
import Footer from "./assets/components/Footer"



function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/wishlist' element={<Wishist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:id/view' element={<View/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
