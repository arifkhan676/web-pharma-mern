import React, { useState } from 'react'
import "./sign.css";
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';

const Signin = () => {

  const [logdata,setLogdata] = useState({
    email:"",
    password:"" 
  });

// console.log(logdata);

  function inputField(e){
        const {name,value} = e.target;
        setLogdata((preValue)=>{
          return {
             ...preValue,
             [name]:value
          }
        });
  }
  function getLogin(){
     
  }
 
  return (
    < div  >
    <section>
        <div className="sign_container">
          <div className="sign_header">
          <img className="logo" src={logo} alt="pharmalogo" />
          </div>
          <div className="sign_form">
            <form action="">
              <h2>Sign In</h2>
              <div className="form_data">
                <label htmlFor="">Email</label>
                <input onChange={inputField} value={logdata.email}
                 type="text" name='email' id='email' />
              </div>
              <div className="form_data"></div>
              <label htmlFor="">Password</label>
                <input onChange={inputField} value={logdata.password}
                 type="password" name='password' placeholder='at least 6 characters'  id='password' />
            </form>
            <button onClick={getLogin} className='signin_btn' > Log In </button>
            <div className="create_accountinfo">
            <p>New To Our Shop</p>
            <button className='signin_btn'><NavLink to="/register" >Create your Pharma account </NavLink> </button>
          </div>
          </div>

        </div>

     </section>
     </div>

  )
}

export default Signin
