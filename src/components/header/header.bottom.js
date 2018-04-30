import React, { Component } from 'react'

const HeaderBottom = () => (
    <div className="header-bottom">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="mainmenu pull-left">
                        <ul className="nav navbar-nav collapse navbar-collapse">
                            <li><a href="index.html" className="active">Home</a></li>
                            <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                                <ul role="menu" className="sub-menu">
                                    <li><a href="shop.html">Products</a></li>
                                    <li><a href="product-details.html">Product Details</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="login.html">Login</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                                <ul role="menu" className="sub-menu">
                                    <li><a href="blog.html">Blog List</a></li>
                                    <li><a href="blog-single.html">Blog Single</a></li>
                                </ul>
                            </li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="contact-us.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="search_box pull-right">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle btn-custom" data-toggle="dropdown">
                            Sort by <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
)
export default HeaderBottom