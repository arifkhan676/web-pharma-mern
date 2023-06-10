import React, { useState } from 'react'
import "./sign.css";
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


  const senddata = async(e)=>{
       e.preventDefault();
       const { fname, email, mobile, password, cpassword } = userdata;
        /*   if I want to show in specific field
       if(fname===""){
        toast.warn("Name Invalid Deatils!",{
          position:"top-center"
      });
       }else if(email===""){
        toast.warn("Email Invalid Deatils!",{
          position:"top-center"
      });
       }else{
        const res = await fetch("register",{
          method:"POST",
          headers: {
            "Content-Type": "application/json"
        },
          body:JSON.stringify({
            fname, email, mobile, password, cpassword
          })
         });
         const data = await res.json();
       }
      

       */
       const res = await fetch("register",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
      },
        body:JSON.stringify({
          fname, email, mobile, password, cpassword
        })
       });
       const data = await res.json();
      // console.log(data);
      if(res.status === 422 || !data ){
        toast.error("Invalid Deatils!",{
          position:"top-center"
      }); }
      else{
        toast.success("Registration Successfully done 😃!",{
            position:"top-center"
        });
         setuserData({...userdata,fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""})
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
                <input onChange={takeInput}  type="password" name='cpassword' id='password'  placeholder='at least 6 characters'   value={userdata.cpassword}  />
                </div>
                <button className='signin_btn' onClick={senddata} > Continue </button>
                <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to='/login' > Sign in </NavLink>
            </div>
               

            </form>
          </div>
          <ToastContainer />


        </div>

     </section>
     </div>
  )
}

export default Signup
