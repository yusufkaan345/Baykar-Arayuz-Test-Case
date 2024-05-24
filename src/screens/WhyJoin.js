import React from 'react'
import '../css/WhyJoin/Whyjoin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
function WhyJoin() {
  return (
    <div id='container'>
      <div className='content'>
        <div className='text-container'>
          <h1 className='font-weight-bold bg-white mb-4 title'>Why join us</h1>
          <p className='bg-white'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />  Est et in pharetra magna adipiscing ornare aliquam.</p>
          <p className='bg-white'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />  Tellus arcu sed consequat ac velit ut eu blandit.</p>
          <p className='bg-white pb-2'><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />  Ullamcorper ornare in et egestas dolor orci.</p>
          <a className="btn btn-active " href="#">Sign up now</a>

        </div>
        <div className='image-container'>
        <img className='image'
            src={require('../../src/src/WhyJoinImages/whyjoinbackground.png')} // Dosya sistemindeki yola güncelleyin
            alt="Kupa"
            style={{
              width: 713,
              height: 625,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default WhyJoin