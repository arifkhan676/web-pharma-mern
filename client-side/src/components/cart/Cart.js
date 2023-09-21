import React, { useEffect, useState, useContext } from 'react'
import { Divider } from '@mui/material';
import "./cart.css"
import { useNavigate, useParams } from 'react-router-dom';
import { LoginContext } from '../contextAPI/ContextProvider';

const Cart = (props) => {

  const { id } = useParams("");
  //console.log(id);
  const history = useNavigate('');

  const { account, setAcoount } = useContext(LoginContext)

  const [inData, setinData] = useState([]);
  console.log(inData);

  const getindata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    // console.log(data);
    if (res.status !== 201) {
      console.log("no data available");
    } else {
      console.log("getData");
      setinData(data);
    }
  }
  useEffect(() => {
    getindata();
  }, [id]);

  //adding cart function

  const addtocart = async (id) => {
    const checkres = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "applicaton/json",
        "Content-Type": "applicaton/json"
      },
      body: JSON.stringify({
        inData
      }),
      credentials: "include"
    });

    const data1 = await checkres.json();
    console.log(data1 + 'front end data');

    if (checkres.status === 401 || !data1) {
      console.log("User Invalid");
      alert("user invalid");
    } else {
      alert("data added into cart");
      console.log("valid");
      history('/buynow');
      setAcoount(data1);
    }

  }

  return (
    <div className='cart_section'>
      {inData && Object.keys(inData).length &&
        <div className="cart_container">
          <div className="left_cart">
            <img src={inData.url} alt="menPro" />
            <div className="cart_btn">
              <button className='cart_btn1' onClick={() => addtocart(inData.id)} >Add to Cart</button>
              <button className='cart_btn2'>Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h1>{inData.title.shortTitle}</h1>
            <h3> {inData.title.longTitle} </h3>
            <Divider ></Divider>
            <p className="mrp"> {inData.price.mrp} BDT </p>
            <p>Deal of the day  <span style={{ color: "red" }} > {inData.price.cost}</span> BDT </p>
            <p>You save <span style={{ color: "red" }} > {inData.price.mrp - inData.price.cost}</span> BDT </p>
            <h4><span style={{ color: "red" }} > Discount:</span> {inData.discount}  </h4>
            <h5> <span style={{ color: "cyan" }}> Free Delivery </span> oct 21- to <span style={{ color: "cyan" }}>  details </span>  </h5>
            <p> <span style={{ fontWeight: 800 }}>About the item : </span> {inData.description} </p>

          </div>
        </div>
      }
    </div>
  )
}

export default Cart
