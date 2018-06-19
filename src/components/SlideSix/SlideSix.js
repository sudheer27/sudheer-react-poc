import React from 'react';

// import Styles from '../../styles.css';
import SliderImage6 from '../../assets/images/part-six.jpg';

const SlideSix= (props) => {
    
  let background = {
    backgroundImage: `url(${SliderImage6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
    
  return <div style={background} className="slide"></div>
}

export default SlideSix;