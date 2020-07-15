import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
            <header>
                <div className="logo">LOGO</div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="rightside">
                    <span>Hi, <b>James</b></span>
                    <span>J</span>
                </div>
            </header>
        );
    }
}

export default Header;