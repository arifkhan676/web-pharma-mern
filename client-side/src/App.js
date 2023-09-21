import './App.css';
import Newnavbaar from './components/header/Newnavbaar';
import Signin from './components/signin_signup/Signin';
import Signup from './components/signin_signup/Signup';
import Maincomp from './components/home/Maincomp';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buy/Buynow';
import Footer from './components/home/Footer';
import Navbaar from './components/header/Navbaar';

function App() {
  return (
    <div >
      <Navbaar />
      <Newnavbaar />
      <Routes>
        <Route path="/" element={<Maincomp />} ></Route>
        <Route path="/login" element={<Signin />}> </Route>
        <Route path="/register" element={<Signup />}> </Route>
        <Route path="/getproductsone/:id" element={<Cart />}> </Route>
        <Route path="/buynow" element={<Buynow />}> </Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
