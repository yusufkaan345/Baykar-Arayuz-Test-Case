import React from 'react'
import '../css/TheBestScreenCss/Thebest.css'
import Card from '../components/TheBestScreenComponents/Card.js'
function TheBestScreen() {
    return (
        <div className="screen-container d-flex flex-column align-items-center justify-content-evenly">
            <div className="section-1 d-flex align-items-center justify-content-around w-100">
                  <h1 className='text-white font-weight-bold bg-transparent'>
                        The best of the best
                  </h1>
                  <a  href='#' className='btn btn-outline-light btn-lg'>Sign up now</a>
            </div>
            <div className="section-2 d-flex align-items-center justify-content-center position-relative">
        <img
          src={require('../../src/src/TheBestScreenImages/Backlights.png')}
          alt="Arkaplan Resmi"
          className="background-image"
        />
        <div className="content-overlay d-flex align-items-center justify-content-around">
        <Card
            imagePath={require('../../src/src/TheBestScreenImages/CardImage1.png')}
            title="Title"
            content="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.  "
          />
          <Card
            imagePath={require('../../src/src/TheBestScreenImages/CardImage2.png')}
            title="Title"
            content="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
          <Card
            imagePath={require('../../src/src/TheBestScreenImages/CardImage3.png')}
            title="Title"
            content="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
        </div>
      </div>
        </div>
    )
}

export default TheBestScreen