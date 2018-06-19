import React from 'react';

// import Styles from '../../styles.css';
import SliderImage3 from '../../assets/images/part-three.jpg';

const SlideThree= (props) => {

  let background = {
    backgroundImage: `url(${SliderImage3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideThree;