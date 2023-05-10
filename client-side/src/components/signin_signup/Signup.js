import React, { useState } from 'react'
import "./sign.css";
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';

const Signup = () => {

  const [userdata,setuserData] = useState({
     fname:"",
     email:"",
     mobile:"",
     password:"",
     cpassword:""
  });

 /* console.log(userdata); */

  function takeInput(e){
    const {name,value} = e.target;
    setuserData((preValue)=>{
      return {
         ...preValue,
         [name]:value
      }
    });
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
              <h2>Sign Up</h2>
              <div className="form_data">
                <label htmlFor="fname">Your name</label>
                <input onChange={takeInput} type="text" name='fname' id='fname' value={userdata.fname} />
              </div>
              <div className="form_data">
              <label htmlFor="email">Email</label>
                <input onChange={takeInput}  type="text" name='email' id='email' value={userdata.email}  />
              </div>
              <div className="form_data">
              <label htmlFor="mobile">Mobile</label>
                <input onChange={takeInput}  type="text" name='mobile' id='mobile' value={userdata.mobile}  />
              </div>
              <div className="form_data">
              <label htmlFor="password">Password</label>
                <input onChange={takeInput}  type="password" name='password' id='password'  placeholder='at least 6 characters'   value={userdata.password}  />
                </div>
                <div className="form_data">
              <label htmlFor="cpassword">Confirm Password</label>
                <input onChange={takeInput}  type="cpassword" name='cpassword' id='password'  placeholder='at least 6 characters'   value={userdata.cpassword}  />
                </div>
                <button className='signin_btn' > Create Account </button>
                <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to='/register' > Sign Up </NavLink>
            </div>
               

            </form>
          </div>
      

        </div>

     </section>
     </div>
  )
}

export default Signup
