import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../../css/TheBestScreenCss/Card.css';
import { FaShoppingCart } from 'react-icons/fa';

function Card({ imagePath, title, content }) {

  const [iconColor, setIconColor] = useState('white');

  return (
    <div className="card ">
      <img src={imagePath} alt={title} className="card-image" />
      <div className="card-body d-flex flex-column  justify-content-evenly">
        <h5 className="card-title bg-transparent text-white">{title}</h5>
        <p className="card-content bg-transparent text-white">{content}</p>
        <a href="#" className="btn btn-outline-light btn-lg buy-now-button"
        onMouseEnter={() => setIconColor('black')}
        onMouseLeave={() => setIconColor('white')}
        >
          <FaShoppingCart className="cart-icon" style={{ color: iconColor }}
           
          /> Buy now
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
