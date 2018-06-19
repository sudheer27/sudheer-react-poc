import React from 'react';

// import Styles from '../../styles.css';
import SliderImage2 from '../../assets/images/part-two.jpg';

const SlideTwo= (props) => {
    
  let background = {
    backgroundImage: `url(${SliderImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  
  return <div style={background} className="slide"></div>
}

export default SlideTwo;