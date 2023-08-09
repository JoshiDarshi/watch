import React from 'react'
import scollect from './Css/collection.css'
import watch1 from './Images/watch-1.png'
import watch2 from './Images/watch-2.png'
import watch3 from './Images/watch-3.png'
function Collection() {
    return (
        <div className='collection-section' id='collection'>
            <div className="maincollection">
                <div className="container">
                    <div className="heading">
                        <h2>Collections</h2>
                    </div>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                        <div className='row'>
                            <div className='col-md-4'>
                            <div className="carousel-item active">
                                
                                <div className="card" interval="2000">
                                <img src={watch1} className="d-block w-100" alt="..." />
                                <h3 className='ch3'>ADRIATICA ADR</h3>
                                <h4 className='ch'>$650.00</h4>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className="carousel-item ">
                                
                                <div className="card">
                                <img src={watch2} className="d-block w-100" alt="..." />
                                <h3 className='ch3'>SEIKO SNZGO7K1</h3>
                                <h4 className='ch'>$250.00</h4>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className="carousel-item">
                                
                                <div className="card">
                                <img src={watch3} className="d-block w-100" alt="..." />
                                <h3 className='ch3'>ROAMER RM 220837</h3>
                                <h4 className='ch'>$850.00</h4>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Collection