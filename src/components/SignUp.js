import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {signup} from "../actions/auth";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
            error: ''
        });
        try {
            await signup(this.state.email, this.state.password);
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
    }

    render() {
        return (
            <div className="form-div">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <h2 className="log">
                        Sign Up
                    </h2>
                    <div className="input-group mb-3 large">
                        <input
                            className="form-control"
                            aria-label="Email"
                            aria-describedby="basic-adon1"
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}/>
                    </div>
                    <div className="input-group mb-3 large">
                        <input
                            className="form-control"
                            aria-label="Email"
                            aria-describedby="basic-adon1"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        />
                    </div>
                    <hr/>
                    <div className="location">
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </div>
                    <hr/>
                    <p className="sign">
                        Already have an account? <
                        Link to="/signin">Sign In</Link>
                    </p>
                </form>
            </div>
        );
    }
}
