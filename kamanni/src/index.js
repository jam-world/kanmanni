import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import ProductContainer from './ProductContainer';

/* use the router library*/
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class EntryPoint extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/ProductContainer" component={ProductContainer}/>
                </div>
            </Router>
        );
    };
};

ReactDOM.render(
    <EntryPoint />,
    document.getElementById('root')
);
