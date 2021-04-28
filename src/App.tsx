import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import hexmap from './images/hexmap.png';
import logos from './images/Logot_koottuna2.png';
import './App.scss';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <header className="App-header">
                                <Link to="/">
                                    <img src={hexmap} className="App-logo" alt="Unofficial-logo" />
                                    <h1>DigiPoint Vantaa</h1>
                                </Link>
                                <NavBar />
                            </header>
                            <div className="content">
                                <Switch>
                                    <Route path="/about">
                                        <About />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                                <SideBar />
                            </div>
                            <footer>
                                <img src={logos} alt="logos" className="" />
                            </footer>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
