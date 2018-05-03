import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const HeaderMiddle = () => (
    <div className="header-middle">
    <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="logo pull-left">
                        <a href="index.html"><img src="assets/images/home/logo.png" alt="" /></a>
                    </div>
                    <div className="btn-group pull-right">
                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                USA
                            <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#">Canada</a></li>
                                <li><a href="#">UK</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                DOLLAR
                            <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#">Canadian Dollar</a></li>
                                <li><a href="#">Pound</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="shop-menu pull-right">
                        <ul className="nav navbar-nav">
                            <li><a href="#"><i className="fa fa-user"></i> Account</a></li>
                            <li><a href="#"><i className="fa fa-star"></i> Wishlist</a></li>
                            <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li>
                            <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                            <li><Link to="/login_register"><i className="fa fa-lock"></i> Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HeaderMiddle