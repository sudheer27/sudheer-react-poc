import React from 'react';

// import Styles from '../../styles.css';
import SliderImage5 from '../../assets/images/part-four.jpg';

const SlideFive= (props) => {
    
  let background = {
    backgroundImage: `url(${SliderImage5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
    
  return <div style={background} className="slide"></div>
}

export default SlideFive;