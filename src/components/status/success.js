import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const Success = () => (
    <div className="container text-center">
    <div className="logo-404">
			<Link to="/"><img src="/assets/images/home/logo.png" alt="" /></Link>
		</div>
		<div className="content-404">
			<h1><b>CONGRATULATIONS!</b></h1>
			<p></p>
			<h2><Link to="/">Bring me back Home</Link></h2>
		</div>
	</div>
)
export default Success