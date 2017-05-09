import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';

/* use the router library*/
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class EntryPoint extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={MainPage}/>
            </Router>
        );
    };
}

ReactDOM.render(
    <EntryPoint />,
    document.getElementById('root')
);
