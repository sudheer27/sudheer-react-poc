import React from 'react';

// import Styles from '../../styles.css';
import SliderImage4 from '../../assets/images/part-four.jpg';

const SlideFour= (props) => {
    
  let background = {
    backgroundImage: `url(${SliderImage4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
    
  return <div style={background} className="slide"></div>
}

export default SlideFour;