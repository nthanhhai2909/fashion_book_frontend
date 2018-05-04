import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = () => (
    <div className="container text-center">
		<div className="logo-404">
			<Link to="/"><img src="/assets/images/home/logo.png" alt="" /></Link>
		</div>
		<div className="content-404 forgotpass">
			<h1><b>FORGOT PASSWORD
            </b></h1>
            <input placeholder="Email"/>
			<h2><Link to="/">Bring me back Home</Link></h2>
		</div>
	</div>
)
export default ForgotPassword