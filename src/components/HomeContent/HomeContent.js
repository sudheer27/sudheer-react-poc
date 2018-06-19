import React from 'react';

import './HomeContent.css';
// import Radium from 'radium';


const homeContent = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        // <div className="HomeContent" style={style}>
        //     <h2 onClick={props.click}>Hi 225 {props.name} and {props.age}</h2>
        //     <input type="text" onChange={props.changed} value={props.name} />
        // </div>
        <div className="HomeContent">
            <h2 onClick={props.click}>Hi 225 {props.name} and {props.age}</h2>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default homeContent;