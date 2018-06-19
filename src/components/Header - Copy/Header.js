import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import classes from './Header.css';


class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Logo-search-sign-part">
                    <div className="LogoDiv">
                        <Logo />
                    </div>
                    <div>
                        <ul>
                            <li className="NavigationItem"><a href="#">Contact</a></li>
                        </ul>
                        <div className="PcPages">
                            <div className="dropdown dropdown--login">
                                <div data-purpose="require-auth">
                                    <a className="btn btn-quaternary">Log In</a>
                                </div>
                            </div>
                            <div className="dropdown dropdown--signup">
                                <div data-purpose="require-auth">
                                    <a className="btn btn-primary">Sign Up</a>
                                </div>
                            </div>
                        </div>
                        <div className="Search-main">
                            <ul>
                                <li>
                                    <div>
                                        <div className="ShowDesktop">
                                            <form id="askUsForm" name="askUsForm" className="main_search" autocomplete="off">
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
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Services-menu">
                    <nav className="NavigationItem">
                        <ul>
                            <li className="NavigationItem"><a>Flights</a></li>
                            <li className="NavigationItem"><a>Hotels</a></li>
                            <li className="NavigationItem"><a>Services</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;