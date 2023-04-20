import React from 'react'
import "./footer.css"

const Footer = () => {
    const date = new Date().getFullYear();
    return (
    <footer>  
        <h1 >Join our Health care </h1>
        <div className='footer_container'>
            <div className='footr_details_one'>
                <h3> Customer care </h3>
                <p>Here is out list</p>
                <p>01811225515</p>
                <p>Dhaka,Bangladesh</p>
            </div>
            <div className='footr_details_one forres'>
                <h3> Customer care </h3>
                <p>Here is out list</p>
                <p>01811225515</p>
                <p>Dhaka,Bangladesh</p>
            </div>
            <div className='footr_details_one forres'>
                <h3> Customer care </h3>
                <p>Here is out list</p>
                <p>01811225515</p>
                <p>Dhaka,Bangladesh</p>
            </div>
            <div className='footr_details_one'>
                <h3> Customer care </h3>
                <p>Here is out list</p>
                <p>01811225515</p>
                <p>Dhaka,Bangladesh</p>
            </div>
            </div>
            <div class="lastdetails">
                <img width={"250px"} src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338690475_144067858354185_3172344338708080886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEdvS3ZweN5aYOAl6I6JWdo43kmvqwRI0vjeSa-rBEjS4a4wt-EHNNfxQIqDay6FNkjnSlpCl9KZrOBjOsvw0bu&_nc_ohc=p_CdKs_G-SoAX_mV5QK&_nc_ht=scontent.fdac135-1.fna&oh=00_AfB-TBnm7CTrFMqkt5NyF9--Gd66GgiMJ6mGMQfbUejTdQ&oe=642E8831" alt="" srcset=""/>
                <span className='date'> {date}</span> 
               <p> Here is our web pharma and health care system  </p> 
               
               
                </div>
        
    </footer>
    )
}

export default Footer;
