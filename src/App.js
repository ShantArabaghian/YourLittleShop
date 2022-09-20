import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Categories from './components/Categories';
import Products from './components/Products';
import MenCategories from './components/MenCategories';
import Girlsweatshirt from './components/Girlsweatshirt';
import GirlJacket from './components/GirlJacket';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Menshirts from './components/Menshirts';
import Mensweatshirt from './components/Mensweatshirt';
import Menjacket from './components/Menjacket';
import Checkout from './components/pages/Checkout';
import Mycart from './components/pages/Mycard';
import {CartProvider} from 'react-use-cart';


function App() {
  return (
    <div className="App">
      <CartProvider>
     <Router>
     <Navbar/>
     
     <hr/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="cart" element={<Mycart/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="aboutus" element={<Aboutus/>}/>
       <Route path="signup" element={<Signup/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="shop" element={<Categories/>}/>
       <Route path="shop2" element={<MenCategories/>}/>
       <Route path="product" element={<Products/>}/>
       <Route path="girlsw" element={<Girlsweatshirt/>}/>
       <Route path="girlj" element={<GirlJacket/>}/>
       <Route path="menshirt" element={<Menshirts/>}/>
       <Route path="mensw" element={<Mensweatshirt/>}/>
       <Route path="menj" element={<Menjacket/>}/>
       <Route path="checkout" element={<Checkout/>}/>
     </Routes>
     
  

     <Footer/>
     </Router>
     </CartProvider>
    </div>
  );
}

export default App;
