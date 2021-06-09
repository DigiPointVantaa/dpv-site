import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logos from './images/Logot_koottuna2.png';
import './App.scss';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Hexagons from './Components/Hexagons';
import Contact from './Components/Contact';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <header className="App-header">
                                <NavBar />
                            </header>
                            <div className="content">
                                <Switch>
                                    <Route path="/about">
                                        <About />
                                    </Route>              
                                    <Route path="/contact">
                                        <Contact />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                                <SideBar />
                            </div>
                            <footer>
                                <img src={logos} alt="logos" className="partner-logos responsive" />
                            </footer>
                        </div>
                        <Hexagons />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
