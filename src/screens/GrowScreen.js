import React from 'react'
import '../css/GrowScreenCss/Grow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShieldAlt, faRocket, faTv, faWifi, faCog } from '@fortawesome/free-solid-svg-icons';

function GrowScreen() {
    return (
        <div id="container">
            <div className='bg-grow-image'>
                <div className='grow-section-1'>
                    <div className=' d-flex flex-column  '>
                        <h1 className="mb-4 " style={{fontWeight:700}}>Grow your collection</h1>
                        <p>
                            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
                            pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna
                            sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                        </p>
                    </div>
                </div>

                <div className='grow-section-2'>
                    <div className="list-group">
                        <a href="#" className="btn btn-light bg-white active d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faSearch}  style={{marginRight:3}} /> Bibendum tellus
                        </a>
                        <a href="#" className="btn  d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faShieldAlt}  style={{marginRight:10}}/>  Cras eget
                        </a>
                        <a href="#" className="btn  d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faRocket}  style={{marginRight:10}} /> Dolor pharetra
                        </a>
                        <a href="#" className="btn  d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faTv}  style={{marginRight:10}} /> Amet, fringilla
                        </a>
                        <a href="#" className="btn  d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faWifi} style={{marginRight:10}} /> Amet nibh
                        </a>
                        <a href="#" className="btn  d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faCog} style={{marginRight:10}} /> Sed velit
                        </a>
                    </div>
                    <div className='grow-image-group'>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default GrowScreen