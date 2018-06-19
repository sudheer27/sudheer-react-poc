import React from 'react';

// import Styles from '../../../styles.css';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;