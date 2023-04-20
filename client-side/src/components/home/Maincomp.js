import React from 'react'
import Banner from './Banner'
import "./home.css"
import Slide from './Slide'
import pic from "../images/hyg.jpg"
import pic2 from "../images/joya.jpg"

const Maincomp = () => {

  return (
    <div className='home_section'>
      <div className='banner_part'>
        <Banner />
      </div>

      <div className='slide_part'>
        <div className='left_slide'>
        <Slide title="Deal of the day" />
        </div>
        <div className='right_slide'>
          <h4>Festivals latest launch</h4>
          <img src={pic2} alt="" />
           <a href='www.google.com' >See more</a>
        </div>
      </div>
      <Slide title="Todays Deal"/>
      <div className='center_img'>
      <img src={pic} alt="" />
        </div>
      <Slide title="Best seller"/>
      <Slide title="Upto 80% off"/>
      

    </div>
  )
}

export default Maincomp

