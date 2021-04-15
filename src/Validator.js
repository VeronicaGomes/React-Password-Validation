import React from "react";
import './Validator.css';

const passwordValidator=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const initialState={
    email: "",
    password: "",
    confirmPassword: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    date: ""
}

class Validator extends React.Component {
    state=initialState;

    handleChange=event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validate=() => {
        let emailError="";
        let passwordError="";
        let confirmPasswordError="";
        const value=this.state.password;

        if (!this.state.email.includes("@")) {
            emailError="invalid email";
        }

        if (!passwordValidator.test(value)) {
            passwordError="Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
            confirmPasswordError="Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
        }

        if (this.state.password.length<7&&this.state.password.length>1) {
            passwordError="Password must contain at least 7 characters";
            confirmPasswordError="Password must contain atleast 7 characters";
        }

        if (this.state.password.length===0) {
            passwordError="Password is required";
            confirmPasswordError="Password is required";
        }

        if (this.state.password!==this.state.confirmPassword) {
            confirmPasswordError="Password did not match"
        }

        if (emailError||confirmPasswordError) {
            this.setState({ emailError, confirmPasswordError, passwordError });
            return false;
        }
        // else if (passwordError) {
        //     this.setState({ passwordError, confirmPasswordError });
        //     return false;
        // }
        else if (passwordError||confirmPasswordError) {
            this.setState({ passwordError, confirmPasswordError })
            return false;
        }
        return true;
    };

    handleSubmit=(event) => {
        event.preventDefault();
        const isValid=this.validate();
        if (isValid) {
            console.log(this.state)
            //clear form
            this.setState(initialState);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>Sign Up Form</h2>
                </div>

                <div>
                    <input
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                    </div>
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.passwordError}</div>
                </div>

                <div>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    />
                    <div style={{ color: "red", fontSize: 12 }}>{this.state.confirmPasswordError}</div>
                </div>

                <div>
                    <input
                        type="date"
                        name="date"
                        min="1990-01-01"
                        max="2050-12-31" />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

}

export default Validator;

