import React, { Component } from 'react'

const ContentLoginRegister = ({ setEmailogin, setPasswordlogin, setEmail,
    setFirstname, setLastname, setAddress, setPhone, setPassword, setConfirm,
    notificationRegister, notificationLogin }) => (
        <section id="form">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="login-form">
                            <h2>Login to your account</h2>
                            <h2>{notificationLogin}</h2>
                            <form >
                                <input type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => { setEmailogin(e.target.value) }}
                                />
                                <input type="password"
                                    placeholder="Password"
                                    onChange={(e) => { setPasswordlogin(e.target.value) }}
                                />
                                <span>
                                    <input type="checkbox" className="checkbox" />
                                    Keep me signed in
							</span>
                                <button type="submit" className="btn btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <h2 className="or">OR</h2>
                    </div>
                    <div className="col-sm-4">
                        <div className="signup-form">
                            <h2>New User Signup!</h2>
                            <h2>{notificationRegister}</h2>
                            <form >
                                <input type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <input type="text"
                                    placeholder="First name"
                                    onChange={(e) => { setFirstname(e.target.value) }}
                                />
                                <input type="text"
                                    placeholder="Last name"
                                    onChange={(e) => { setLastname(e.target.value) }}
                                />
                                <input type="text"
                                    placeholder="Address"
                                    onChange={(e) => { setAddress(e.target.value) }}
                                />
                                <input type="tel" 
                                placeholder="Phone number" 
                                onChange={(e) => { setPhone(e.target.value) }}
                                />
                                <input type="password" 
                                placeholder="Password"
                                onChange={(e) => {setPassword(e.target.value) }}
                                />
                                <input type="password"
                                 placeholder="Confirm" 
                                 onChange={(e) => { setConfirm(e.target.value) }}
                                 />
                                <button type="submit" className="btn btn-default">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
export default ContentLoginRegister