import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const EnterNewPassword = ({setNewPassword,setConfirm, submitEnterNewPassword  }) => (
    <div className="container text-center">
        <div className="logo-404">
            <Link to="/"><img src="/assets/images/home/logo.png" alt="" /></Link>
        </div>
        <div className="content-404 forgotpass">
            <h1><b>ENTER NEW PASSWORD
			</b></h1>
            <input
                type="text"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <br/>
            <input
                type="text"
                placeholder="Confirm"
                onChange={(e) => setConfirm(e.target.value)}
            />
            <br />
            <button
                className="btn btn-default"
                onClick={() => submitEnterNewPassword()}
            >
                submit
			</button>
            <h2><Link to="/">Bring me back Home</Link></h2>
        </div>
    </div>
)
export default EnterNewPassword