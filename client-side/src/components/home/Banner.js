import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"
import slid1 from "../images/slid1.jpg"
import slid2 from "../images/slid2.jpg"
import slid3 from "../images/slid3.jpg"


const data = [
  slid3,
  slid2,
  slid1
]
const Banner = () => {
  return (
    <Carousel 
    className='carasousel'
    autoPlay={true}
    animation='slide'
    indicators={false}
    navButtonsAlwaysInvisible={true}
    cycleNavigation={true}
    navButtonsProps={{
      style:{
        backgroundColor:"#fff",
        color: "#49494",
        borderRadius:0,
        marginTop:-22,
        height:"100px"

      }
    }}
    >
      {data.map((img,i)=>{
        return (
            <div>
             <img src={img} alt="" className='banner_img'/>   
            </div>
        )
      })}
    </Carousel>

  ) 
}

export default Banner
