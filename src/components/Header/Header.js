import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import './Header.css';


class Header extends Component {
    render () {
        return (
            <header className="Header">
                <div className="Logo-menu-sign-part-search">
                    <div className="LogoDiv">
                        <Logo />
                    </div>
                    <div className="menu-sign-part-search">
                        <div className="Services-menu">
                        <nav className="NavigationItem">
                            <ul>
                                <li className="NavigationItem"><a className="is-link active">Flights</a></li>
                                <li className="NavigationItem"><a className="is-link">Hotels</a></li>
                                <li className="NavigationItem"><a className="is-link">Services</a></li>
                                <li className="NavigationItem"><a className="is-link">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="PcPages">
                        <div className="dropdown dropdown--login">
                            <a className="btn btn-quaternary is-link">Log In</a>
                            <span className="pipe-symbol">|</span>
                        </div>
                        <div className="dropdown dropdown--signup">
                            <a className="btn btn-primary is-link">Sign Up</a>
                        </div>
                    </div>
                    <div className = "Search-menu">
                        <div className="ShowDesktop">
                            <form id="askUsForm" name="askUsForm" className="main_search">
                                <div>
                                    <input type="text" id="askAnaQueryInput" aria-label="Ask me a question. For example: What cities do you fly to?" mac-autocomplete-source="search"
                                        mac-placeholder="'Search'" mac-autocomplete-on-select="selectQueryFromSuggestions(selected);"
                                        placeholder="Search" />
                                </div>
                                <div>
                                    <button type="submit" className="button">Search
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="ShowMObile">
                            <input className="search" type="text" placeholder="Search" />
                            <ul className="ask-ana">
                            </ul>
                            <i className="fa fa-spinner fa-spin"></i>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;