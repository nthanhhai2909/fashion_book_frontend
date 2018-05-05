import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const ProductItem = ({urlImg, price, describe, id }) => (
    <div className="col-sm-4">
        <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center"
                >
                    <img src={urlImg} alt="" />
                    <h2>{price}</h2>
                    <p>{describe}</p>
                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
                <Link to={'/product/' + id} className="product-overlay">  
                    <div className="overlay-content">
                        <h2>{price}</h2>
                        <p>{describe}</p>
                        <p href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
)
export default ProductItem