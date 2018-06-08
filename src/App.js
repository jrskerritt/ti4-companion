import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Tech from './Tech';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Twilight Imperium 4th Edition</h1>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/tech" component={Tech} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
