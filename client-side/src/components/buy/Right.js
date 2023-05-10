import React from 'react'
import Subtotal from './Subtotal'
import upImg from "../images/pod5.jpg"
const Right = () => {
  return (
    <div className='right_buy' > 
      <img src={upImg} alt="" />
      <div className="cost_right">
        <p>Your order is eligible for delivery</p>
        <span> Select this option to check out this.details </span>
        <Subtotal/>
          <button className='rightbuy_btn' > Process to buy </button> 
          <div className="emi">
            Emi available
          </div>
      </div>
    </div>
  )
}

export default Right
