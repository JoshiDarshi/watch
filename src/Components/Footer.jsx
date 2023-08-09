import React from 'react'
import footer from './Css/footer.css'
function Footer() {
    return (
        <>
        <div className='footersection'>
            <div className="mainfooter">
                <div className="container">
                    <div className="fooflex">
                        <div className="watch">
                            <h1>watch</h1>
                        </div>
                        <div className="firstlist">
                            <div className="menu">
                                <h1>Menu</h1>
                            </div>
                            <ul className="menulist2">
                                <li>Shipping Info</li>
                                <li>Refunds</li>
                                <li>How to Order</li>
                                <li>How to Track</li>
                                <li>Size Guides</li>
                            </ul>
                        </div>
                        <div className="list3">
                        <ul className="menulist2">
                                <li>Contact Us</li>
                                <li>My Account</li>
                                </ul>
                        </div>
                        <div className="email">
                            <div className="forinflex">
                                <input type="text" placeholder='Enter Your Email'/>
                                <button className='btnfooter'>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
        <div className="black"></div>
        </>
    )
}

export default Footer