import React, {Component} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";

class LandingPage extends Component {
    state = {
        startDate: moment()
    };
    render() {
        const selectedDate = this.state.startDate.format("Do MMMM YYYY");
        return (
            <>
                <div id="clock">{selectedDate}</div>
                <h1 id="main">Welcome to Youtube Chanel!</h1>
                <div id="container">
                    <div>
                        <h3 className="link"><Link className="link" to="/signup">Sign Up</Link></h3>
                        <div className="line"> </div>
                        <h3 className="link"><Link className="link" to="/signin">Sign In</Link></h3>
                    </div>
                </div>
            </>
        );
    }
}

export default LandingPage;