import React from 'react'
import '../../css/LandingPageCss/Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <div className="main-background">
      <div className="top">
        <div className="topText">
          <p style={{ fontFamily: 'Roboto', fontWeight: 800, fontSize: 72, color: '#0F172A' }}>
            Collectible Sneakers
          </p>
          <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: 18, color: '#0F172A' }}>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="mt-4" >
            <a className="buton  btn btn-active" style={{ marginRight: 16, fontWeight: 500, fontSize: 18 }} href="#">Sign up now</a>
            <a className="buton btn" href="#">
              <FontAwesomeIcon icon={faCirclePlay} style={{ fontSize: 'inherit', paddingRight: 4 }} />
              Watch Demo
            </a>
          </div>
        </div>
        <div className="topImage">
          <img
            src={require('../../src/LandingImages/yellow.png')} // Dosya sistemindeki yola güncelleyin
            alt="Alt Resim"
            style={{
              position: 'absolute',
              bottom: 0,
              width: 367,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              height: 372,
            }}
          />
          <img
            src={require('../../src/LandingImages/shoe.png')} // Dosya sistemindeki yola güncelleyin
            alt="Üst Resim"
            style={{
              position: 'absolute',
              width: 486,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              height: 388,
            }}
          />
        </div>
      </div>

      <div className='bottom '>
        <div className=" d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.0)', height: '205px' }}>
          <div className="d-flex justify-content-between" style={{ width: '1280px', backgroundColor: 'rgba(0,0,0,0)', height: '205px', flexDirection: 'row' }}>
            <div className="flex-item  " style={{ width: '373px', height: '100%' }}>
            <img
            src={require('../../src/LandingImages/IconKupa.png')} // Dosya sistemindeki yola güncelleyin
            alt="Kupa"
            style={{
              width: 64,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              height: 64,
            }}
          />
              <h6 className='text-dark' style={{backgroundColor:'rgba(0,0,0,0'}}>Nibh viverra</h6>
              <div className='text-dark' style={{backgroundColor:'rgba(0,0,0,0'}}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </div>

            </div>
            <div className="flex-item" style={{ width: '373px', height: '100%' }}>
            <img
            src={require('../../src/LandingImages/Icon.png')} // Dosya sistemindeki yola güncelleyin
            alt="Kupa"
            style={{
              width: 64,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              height: 64,
            }}
          />
              <h6 className='text-dark' style={{backgroundColor:'rgba(0,0,0,0'}} >Cursus amet</h6>
              <div className='text-dark' style={{backgroundColor:'rgba(0,0,0,0'}}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </div>
            </div>
            <div className="flex-item " style={{ width: '373px', height: '100%' }}>
            <img
            src={require('../../src/LandingImages/IconTv.png')} // Dosya sistemindeki yola güncelleyin
            alt="Kupa"
            style={{
              width: 64,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              height: 64,
            }}
          />
              <h6 className='text-dark' style={{backgroundColor:'rgba(0,0,0,0'}}>Ipsum fermentum</h6>
              <div className='text-dark ' style={{backgroundColor:'rgba(0,0,0,0'}}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main