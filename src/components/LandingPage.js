import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LandingPage extends Component {
    render() {
        return (
            <>
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