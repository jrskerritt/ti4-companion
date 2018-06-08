import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__item">
                    <Link to="/tech">Technology</Link>
                </div>
            </div>
        );
    }
}

export default Nav;
