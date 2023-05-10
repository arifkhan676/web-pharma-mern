import React from 'react'
import leftPic from "../images/menPro.jpg"
import { Divider } from '@mui/material';
import "./cart.css"

const Cart = () => {
    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">
                    <img src={leftPic} alt="menPro" />
                    <div className="cart_btn">
                        <button className='cart_btn1'>Add to Cart</button>
                        <button className='cart_btn2'>Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h1>Cleanoic products</h1>
                    <h3> Piegon FAVOURITE one </h3>
                  <Divider ></Divider> 
                    <p className="mrp"> price: $322 </p>
                    <p>Deal of the day  <span style={{color:"red"}} > $222</span> </p>
                    <p>You save <span style={{color:"red"}} > $100</span> </p>
                    <h4><span style={{color:"red"}} > Discount:</span> extra 10% off  </h4>
                    <h5> <span style={{color:"cyan"}}> Free Delivery </span> oct 21- to <span style={{color:"cyan"}}>  details </span>  </h5>
                     <p> <span style={{fontWeight:800}}>About the item : </span>  This product is makes with natural ingredients ,however,
                        this is why we like the product that is insane lol dont anything...
                        This product is makes with natural ingredients ,however,
                        this is why we like the product that is insane lol dont anything...
                         </p>
                
                </div>
            </div>
        </div>
    )
}

export default Cart
