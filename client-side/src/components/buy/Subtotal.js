import React, { useEffect, useState } from 'react'

const Subtotal = ({ item }) => {

  const [price, setPrice] = useState(0);

  console.log({ item });

  useEffect(() => {
    TotalAmount();
  }, [item]);

  const TotalAmount = () => {
    let price = 0;
    item.map((itm) => {
      price += itm.price.cost;
    })
    setPrice(price);
  }


  return (
    <div className='sub_total' >
      <h3 > Total amount is : <strong style={{ fontWeight: 700 }}> ${price}.00</strong> </h3>
    </div>
  )
}

export default Subtotal
