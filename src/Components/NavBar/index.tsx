import React from 'react';
import { Link } from 'react-router-dom';
import hexmap from '../../images/hexmap.png';
import './style.scss';

class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/">
                    <img src={hexmap} className="App-logo" alt="Unofficial-logo" />
                    DigiPoint Vantaa
                </Link>
                <ul>
                    <Link to="/">
                        Etusivu
                    </Link>
                    <Link to="/about">
                        Tietoja
                    </Link>
                    <Link to="/contact">
                        Ota yhteyttä
                    </Link>
                    <Link to="/partners">
                        Yhteistyökumppanit
                    </Link>
                </ul>
            </div>
        );
    }
}

export default NavBar;
