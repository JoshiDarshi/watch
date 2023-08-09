import React from 'react'
import testimonial from './Css/testimonial.css'
import smith from './Images/smith.png'
import sandra from './Images/sandra-willims.png'
function Testimonial() {
  return (
    <div className='testimonialsection'>
       <div className="inner">
        <div className="customer">
            <h1>What Customer are saying</h1>
        </div>
        <div className="container">
           <div className="forflex">
        <div className="customer_card ">
          <div className='top'>
            <img src={smith} alt="" />
            <h5>AMANDA SMITH</h5>
          </div>
          <div className="incontent">
            <p>Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
          </div>
        </div>
        <div className="customer_card ">
          <div className='top'>
            <img src={sandra} alt="" />
            <h5>AINARA VERGARA</h5>
          </div>
          <div className="incontent">
            <p>Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
          </div>
        </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Testimonial