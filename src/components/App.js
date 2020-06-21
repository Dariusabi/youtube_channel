import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import SearchPage from '../components/SearchPage';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { auth } from '../actions/firebase';
import { PublicRoute, PrivateRoute } from '../components/Router';
import LandingPage from './LandingPage';


class App extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true,
        };
    }

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false
                })
            }
        })
    }

    render() {
        return this.state.loading === true ? <h2>Loading...</h2> : (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <PrivateRoute path="/searchpage" authenticated={this.state.authenticated} component={SearchPage}/>
                    <PublicRoute path="/signup" authenticated={this.state.authenticated} component={SignUp}/>
                    <PublicRoute path="/signin" authenticated={this.state.authenticated} component={SignIn}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
