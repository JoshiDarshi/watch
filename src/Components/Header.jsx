import React from 'react'
import sheader from './Css/header.css'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <div className='header'>
           <div className='main-header'>
             {/* <div className='container'> */}
              <div className="iner-header">
              <div className="title">
               <a href="">Watch</a>
               </div>
               <div className="list">
                <ul className="menulist">
                  <li className='brown'><a href="">Watches</a></li>
                   <li><a href={"#store"}>Store</a></li>
                   <li><a href={"#collection"}>Collection</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Request Virtual</a></li>
                </ul>
               </div>
               <div className="call">
                <span className='phone'><BsFillTelephoneOutboundFill size={20}/></span>
                <p className="number">+1223545542</p>
               </div>
               </div>
             </div>
           </div>
        </div>
    // </div>
  )
}

export default Header