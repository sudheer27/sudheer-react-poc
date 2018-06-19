import React from 'react';

import logo from '../../assets/images/logo.png';
import './Logo.css';

const logos = (props) => (
    <div className="Logo">
        <img src={logo} alt="reactlogo" />
    </div>
);

export default logos;