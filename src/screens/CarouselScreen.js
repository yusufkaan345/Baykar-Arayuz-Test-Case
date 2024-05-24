import React, { useState } from 'react'
import '../css/CarouselCss/Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import CarouselCard from '../components/CarouselComponents/CarouselCard';
function CarouselScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
        console.log("tıklandı")
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
        console.log("tıklandı")
    };
    return (

        <div id='carousel-container'>
            <div className='carousel-title'>
                <h1>Because they love us</h1>
                <div className='carousel-buttons'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arrow left-arrow' 
                    style={{ fontSize: '36px', color: '#78350F', marginRight: '10px', cursor: 'pointer' }} 
                    onClick={handlePrev} />
                    <FontAwesomeIcon icon={faArrowAltCircleRight}
                     className='arrow right-arrow'
                      style={{ fontSize: '36px', color: '#78350F', cursor: 'pointer' }} onClick={handleNext}
                      
                      />
                </div>
            </div>
            <div className='carousel-content'>
                <CarouselCard
                    icon={require('../../src/src/CarouselImages/zoomericon.png')}
                    title="Zoomer"
                    content="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                    userImage={require('../../src/src/CarouselImages/zoomerthumb.png')}
                    userName="Hellen Jummy"
                    position='Team Lead'
                    isActive={currentIndex === 0}
                />
                <CarouselCard
                    icon={require('../../src/src/CarouselImages/shellsicon.png')}
                    title="SHELLS"
                    content="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
                    userImage={require('../../src/src/CarouselImages/shellsthumb.png')}
                    userName="Hellena John"
                    position='Co-founder'
                    isActive={currentIndex === 1}
                />
                <CarouselCard
                    icon={require('../../src/src/CarouselImages/articon.png')}
                    title="ArtVenue"
                    content="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
                    userImage={require('../../src/src/CarouselImages/artthumb.png')}
                    userName="David Oshodi"
                    position='Manager'
                    isActive={currentIndex === 2}
                />
                <CarouselCard
                    icon={require('../../src/src/CarouselImages/wavesicon.png')}
                    title="Waves"
                    content="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
                    userImage={require('../../src/src/CarouselImages/wavesthumb.png')}
                    userName="Charolette Hanlin "
                    position='CEO'
                    isActive={currentIndex === 3}
                />
            </div>
            <div className='carousel-bg-image'>

            </div>
        </div>
    )
}

export default CarouselScreen