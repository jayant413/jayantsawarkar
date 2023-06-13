import React from 'react'
import cloud from '../../images/cloud.png'
import cloudSoft from '../../images/cloud-soft.png'
import './style.scss'
import Navigation from '../navigation-bar'

const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id="parallax">
        <img src={cloud} alt="cloud" className="cloud" />
      </div>
      <div className="cloud-soft">
        <img src={cloudSoft} alt='cloud-soft' className='cloud-soft' />
      </div>
      <div className="content">
        <Navigation/>
      </div>
    </div>
  )
}

export default Intro
