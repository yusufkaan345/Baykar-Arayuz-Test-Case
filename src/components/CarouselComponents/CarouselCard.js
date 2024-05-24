
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/CarouselCss/CarouselCard.css';

function CarouselCard(props) {
    return (
        <div id='carousel-card' className={props.isActive ? 'active' : 'inactive'}>
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <img className='carousel-image-icon ' src={props.icon} alt={props.title} />
                <span>{props.title}</span>
            </div>
            <p className='carousel-card-content'>{props.content}</p>
            <div className='carousel-user-info'>
                <img className='carousel-image-user' src={props.userImage} alt={props.userName} />
                <div>
                    <span>{props.userName}</span>
                    <p>{props.position}</p>
                </div>
            </div>
        </div>
    );
}

CarouselCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    userImage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default CarouselCard;
