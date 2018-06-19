import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
            <nav className="NavigationItem">
                <ul>
                    <li className="NavigationItem"><a>Privacy policy</a></li>
                    <li className="NavigationItem"><a>Terms & Conditions</a></li>
                    <li className="NavigationItem"><a>Some other Links</a></li>
                </ul>
            </nav>
                <div className="Year">
                    © BSKR 2018
                </div>
            </footer>
        );
    }
}

export default Footer;