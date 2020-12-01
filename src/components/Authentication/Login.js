import React, { Component } from "react";
import {firebase_var} from "../../config/firebaseConfig";
import loginImg from '../../assets/login.svg';
import './Login.css';
import history from '../../history';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }


    login = (e) => {
        e.preventDefault();
        firebase_var.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
         //   alert("Login Successful");
            history.push('/home');

        }).catch((err) => {
            alert("No Account Found yayy");
        })

    }

    signUp = (e) => {
        e.preventDefault();
        firebase_var.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
            alert("Signup Successful");
        }).catch((err) => {
            console.log(err);
            alert("SignUp Failed")
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="container">
                <h className="loginHeading"><b>Login</b></h>
                
                <img src={loginImg} className="image"/>
                

                <form>
                    <input
                    type="email"
                    name="email"
                    className="inputText"
                    placeholder="enter email address"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <input
                    name="password"
                    type= "password"
                    className="inputText"
                    onChange={this.handleChange}
                    placeholder="enter password"
                    value={this.state.password}
                    />
                </form>
                
                <button onClick={this.login} className="inputSubmit">Login</button>
                <div className="forgotPassword"><u>Forgot password</u></div>
                <button onClick={this.signUp} className="inputSubmit">Signup</button>
    
            </div>
        )
    }
}

export default Login;
