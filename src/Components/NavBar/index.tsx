import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/about">
                    Tietoja
                </Link>
            </div>
        );
    }
}

export default NavBar;
