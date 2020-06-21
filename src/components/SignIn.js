import React, { Component } from "react";
import { Link } from "react-router-dom";
import {signin} from "../actions/auth";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            error: ''
        });
        try {
            await signin(this.state.email, this.state.password);
        }catch (error) {
            this.setState({
                error: error.message
            });
        }
    };

    render() {
        return (
            <div className="form-div">
                <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <h2 className="log">Sign In</h2>
                    <div className="input-group mb-3 large">
                        <input
                            className="form-control"
                            aria-label="Email"
                            aria-describedby="basic-adon1"
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="input-group mb-3 large">
                        <input
                            className="form-control"
                            aria-label="Email"
                            aria-describedby="basic-adon1"
                            placeholder='Password'
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        />
                    </div>
                    <hr />
                    <div className="location">
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </div>
                    <hr />
                    <p className="sign">
                        Don't have an account?
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>
        )
    }
}
