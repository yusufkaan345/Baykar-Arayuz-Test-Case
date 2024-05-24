import React from 'react';
import PropTypes from 'prop-types';
import '../../css/FooterCss/MainCard.css'
function MainCard({ title, subheadings }) {
  return (
    <div className='container' style={{ color: 'white',}}>
        <p style={{ fontWeight: 'bold' }}>{title}</p>
            {subheadings.map((subheading, index) => (
                <p key={index}>{subheading}</p>
            ))}
        
    </div>
  );
}

MainCard.propTypes = {
  title: PropTypes.string.isRequired,
  subheadings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainCard;