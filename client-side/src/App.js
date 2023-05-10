import './App.css';
import Newnavbaar from './components/header/Newnavbaar';
import Signin from './components/signin_signup/Signin';
import Signup from './components/signin_signup/Signup';
import Navbar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buy/Buynow';

function App() {
  return (
    <div >
      <Navbar />
      <Newnavbaar />
      <Routes>
        <Route path="/" element={<Maincomp />} ></Route>
        <Route path="/login" element={<Signin/>}> </Route>
        <Route path="/register" element={<Signup/>}> </Route>
        <Route path="/getproductsone/:id" element={<Cart/>}> </Route>
        <Route path="/buynow" element={<Buynow/>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
