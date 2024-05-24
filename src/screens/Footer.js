import React from 'react'
import '../css/FooterCss/Footer.css'
import Main from '../components/FooterComponents/Main.js'
import Bottom from '../components/FooterComponents/Bottom.js'
function Footer() {
  return (
    <div id='footer-container'>
        <Main/>
        <Bottom/>
    </div>
  )
}

export default Footer