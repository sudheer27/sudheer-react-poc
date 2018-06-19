import React from 'react';

// import Styles from '../../styles.css';
import SliderImage1 from '../../assets/images/part-one.jpg';

const SlideOne= (props) => {
    
  let background = {
    backgroundImage: `url(${SliderImage1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
    
  return <div style={background} className="slide"></div>
}

export default SlideOne;