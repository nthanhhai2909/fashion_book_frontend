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
                <div  className="product-overlay">  
                    <div className="overlay-content">
                        <Link to={'/product/' + id}><h2>{price}</h2></Link>
                        <Link to={'/product/' + id}><p>{describe}</p></Link>
                        <p href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default ProductItem