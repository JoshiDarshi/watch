import React from 'react'
import store from './Css/store.css'
import storebg from './Images/store-bg.png'
function Store() {
  return (
    <div className='store-section' id='store'>
      <div className="mainstore">
        <div className="image col-md-6">
            <img src={storebg} alt="" />
        </div>
        
        <div className="storecontent col-md-6">
            <h3>Our Store</h3>
            <p>Memphis clinched a spot in the play-in tournament with the victory, but the fight for seeding continues. The race for the No. 8 spot in the West -- and the safety net of having to win just one of two games to make the playoffs -- could come down to the regular seasons final day, when Memphis and Golden State meet. The good thing for the Grizzlies is they dont have to leave home until that matchup as they have games against Dallas and two against Sacramento before the finale.</p>
        </div>
        </div>
      </div>
    
  )
}

export default Store