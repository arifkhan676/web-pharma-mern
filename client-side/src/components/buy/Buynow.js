import React, { useEffect, useState } from 'react'
import { Divider } from '@mui/material'
import cerelac from "../images/cerelac.jpg"
import Option from './Option'
import Subtotal from './Subtotal'
import "./buynow.css"
import Right from './Right'

/*
const [cartdata, setCartdata] = useState("");

  console.log(cartdata);


  const getdatabuy = async () => {
    const res = await fetch("/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });

    const data = await res.json();

    if (res.status !== 201) {
      alert("no data available")
    } else {
      // console.log("data ");
      setCartdata(data);
    }

  }

  useEffect(() => {
    getdatabuy();
  }, []);
*/
const Buynow = () => {

  const [cartdata, setCartdata] = useState("");
  // console.log(cartdata);

  const getdatabuy = async () => {
    const res = await fetch("/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });

    const data = await res.json();
    // console.log(data.carts);

    if (res.status !== 201) {
      alert("no data available")
    } else {
      // console.log("data cart main hain");
      setCartdata(data.carts);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);


  return (
    <>
      {
        cartdata.length ? <div className='buynow_section'>
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Medicine List</h1>
              <h3> Select all items </h3>
              <span className='leftbuyprice'>Price</span>
              <Divider />
              {
                cartdata.map((e, k) => {
                  return (
                    <>
                      <div className="item_containert">
                        <img src={e.url} alt="" />
                        <div className="items_details">
                          <h2 > {e.title.shortTitle} </h2>
                          <p> {e.title.longTitle} </p>
                          <p className="unusuall"> Usually disptaches in 7-8 days </p>
                          <p> Eligible for free shipping </p>
                          <Option />
                        </div>
                        <h3 className='item_price' > ${e.price.cost} </h3>

                      </div>
                      <Divider />
                    </>
                  )
                })
              }
              <Subtotal item={cartdata} />
            </div>
            <div className="right_buy">
              <Right item={cartdata} />
            </div>
          </div>
        </div> : ''
      }

    </>
  )


}

export default Buynow
