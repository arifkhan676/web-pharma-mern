import React from 'react'
import { Divider } from '@mui/material'
import cerelac from "../images/cerelac.jpg"
import Option from './Option'
import Subtotal from './Subtotal'
import "./buynow.css"
import Right from './Right'

const Buynow = () => {
  return (
    <div className='buynow_section'>
     <div className="buynow_container">
        <div className="left_buy">
            <h1>Medicine List</h1>
            <h3> Select all items </h3>
            <span className='leftbuyprice'>Price</span>
            <Divider/>
           <div className="item_containert">
            <img src={cerelac} alt="" />
            <div className="items_details">
                <h2 >Cerelac Made in idìndian</h2>
                <p className="unusuall"> Usually disptaches in 7-8 days </p>
                <p> Eligible for free shipping </p>
               <Option/>
                </div>
                <h3 className='item_price' > $401 </h3>
                <Subtotal/>
            </div>
            <Divider/>
        </div>
        <div className="right_buy">
           <Right/>
        </div>
     </div>
    </div>
  )
}

export default Buynow
