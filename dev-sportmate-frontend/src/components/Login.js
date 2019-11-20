import React, { Component } from 'react'
import "../assets/css/login.css"


export class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab" style={{ cursor: "pointer" }}>Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" />
                        <label for="tab-2" className="tab" style={{ cursor: "pointer" }}>Sign Up</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label for="user" className="label">Username</label>
                                    <input id="user" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label for="user" className="label">Full Name</label>
                                    <input id="user" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check" checked />
                                    <label for="check"><span className="icon"></span> Keep me Signed in</label>
                                </div>
                                <div className="group">
                                    <input style={{ cursor: "pointer" }} type="submit" className="button" value="Sign In" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="/">Go Back Home ?</a>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label for="user" className="label">Username</label>
                                    <input id="user" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Repeat Password</label>
                                    <input id="pass" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Email Address</label>
                                    <input id="pass" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Favourite Sport</label>
                                    <select style={{ borderRadius: "25px", background: "rgba(255,255,255,.1)", width: "100%", color: "white" }}>
                                        <option value="Basketball" style={{ color: "black" }}>Basketball</option>
                                        <option value="Football" style={{ color: "black" }}>Football</option>
                                        <option value="Baseball" style={{ color: "black" }}>Baseball</option>
                                        <option value="Bowling" style={{ color: "black" }}>Bowling</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Address</label>
                                    <input id="pass" type="text" className="input" />
                                </div>

                                <div className="group">
                                    <input style={{ cursor: "pointer" }} type="submit" className="button" value="Sign Up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login
