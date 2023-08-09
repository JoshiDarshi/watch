import React from 'react'
import Rado from './Images/rado.png'
import swatch from './Images/swatch.png'
import omega from './Images/omega-1.png'
import zenith from './Images/zenith.png'
import sbrands from './Css/brand.css'

function Brand() {
  return (
    <div className='brandsection'>
          
           <div className="row1">
            <div className="img1">
              <img src={Rado} alt="" />
            </div>
            <div className="img1">
              <img src={swatch} alt="" />
            </div>
            <div className="img1">
              <img src={omega} alt="" />
            </div>
            <div className="img1">
              <img src={zenith} alt="" />
            </div>
          </div> 

         </div>
    
  )
}

export default Brand