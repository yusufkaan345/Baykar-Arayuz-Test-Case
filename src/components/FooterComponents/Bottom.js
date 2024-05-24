import React from 'react'
import '../../css/FooterCss/Bottom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
function Bottom() {
  return (
    <div id='bottom-container'>
        <div className='copy-rights'>
            <p>
               Collers @ 2023. All rights reserved.
            </p>
        </div>
        <div className='terms'>
            <a href='' className='link'> Terms</a>
            <a href=''  className='link'> Privacy</a>
            <a href=''  className='link'> Contact</a>
            <a href=''  className='link'> <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '5px' }} />  EN</a>

        </div>
    </div>
  )
}

export default Bottom