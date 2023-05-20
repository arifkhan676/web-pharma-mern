import React, { useState } from 'react'
import "./sign.css";
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Signin = () => {

  const [logdata,setLogdata] = useState({
    email:"",
    password:"" 
  });

// console.log(logdata);

  function inputField(e){
        const {name,value} = e.target;
        console.log(logdata);
        setLogdata((preValue)=>{
          return {
             ...preValue,
             [name]:value
          }
        });
  }

  const getLogin=async(e)=>{
    e.preventDefault();
    const {email,password} = logdata;
      
    const res = await fetch("/login",{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });

    const data = await res.json();
     console.log(data);

    if(res.status === 400 || !data ){
      console.log("Invalid address");
      toast.error("Invalid Deatils!",{
        position:"top-center"
    }); }
    else{
      console.log("valid address");

      toast.success("Login Successfully 😃!",{
          position:"top-center"
      });
      setLogdata({...logdata,
      email:"",
      password:""})
    }

  }
 
  return (
    < div  >
    <section>
        <div className="sign_container">
          <div className="sign_header">
          <img className="logo" src={logo} alt="pharmalogo" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h2>Sign In</h2>
              <div className="form_data">
                <label htmlFor="">Email</label>
                <input type="text" name='email' id='email' onChange={inputField} value={logdata.email}
                  />
              </div>
              <div className="form_data"></div>
              <label htmlFor="">Password</label>
                <input type="password" name='password' placeholder='at least 6 characters'  id='password' onChange={inputField} value={logdata.password}
                  />
            </form>
            <ToastContainer />

            <button  className='signin_btn' onClick={getLogin} > Log In </button>
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
