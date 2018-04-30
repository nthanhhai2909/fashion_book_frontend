import React, { Component } from 'react'
import ProductItem from './product.item';

const ContentHome = () => (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="left-sidebar">
                        <h2>Category</h2>
                        <div className="panel-group category-products" id="accordian">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                            <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                            Sportswear
										</a>
                                    </h4>
                                </div>
                                <div id="sportswear" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <ul>
                                            <li><a href="#">Nike </a></li>
                                            <li><a href="#">Under Armour </a></li>
                                            <li><a href="#">Adidas </a></li>
                                            <li><a href="#">Puma</a></li>
                                            <li><a href="#">ASICS </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                            <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                            Mens
										</a>
                                    </h4>
                                </div>
                                <div id="mens" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <ul>
                                            <li><a href="#">Fendi</a></li>
                                            <li><a href="#">Guess</a></li>
                                            <li><a href="#">Valentino</a></li>
                                            <li><a href="#">Dior</a></li>
                                            <li><a href="#">Versace</a></li>
                                            <li><a href="#">Armani</a></li>
                                            <li><a href="#">Prada</a></li>
                                            <li><a href="#">Dolce and Gabbana</a></li>
                                            <li><a href="#">Chanel</a></li>
                                            <li><a href="#">Gucci</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                            <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                            Womens
										</a>
                                    </h4>
                                </div>
                                <div id="womens" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <ul>
                                            <li><a href="#">Fendi</a></li>
                                            <li><a href="#">Guess</a></li>
                                            <li><a href="#">Valentino</a></li>
                                            <li><a href="#">Dior</a></li>
                                            <li><a href="#">Versace</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#">Kids</a></h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#">Fashion</a></h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#">Households</a></h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#">Interiors</a></h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#">Clothing</a></h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#">Bags</a></h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#">Shoes</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="brands_products">
                            <h2>Brands</h2>
                            <div className="brands-name">
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#"> <span class="pull-right">(50)</span>Acne</a></li>
                                    <li><a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a></li>
                                    <li><a href="#"> <span class="pull-right">(27)</span>Albiro</a></li>
                                    <li><a href="#"> <span class="pull-right">(32)</span>Ronhill</a></li>
                                    <li><a href="#"> <span class="pull-right">(5)</span>Oddmolly</a></li>
                                    <li><a href="#"> <span class="pull-right">(9)</span>Boudestijn</a></li>
                                    <li><a href="#"> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="price-range">
							<h2>Price Range</h2>
							<div class="well text-center">
                            <div class="radio">
                            <label><input type="radio" name="optradio"/>Option 1</label>
                          </div>
                          <div class="radio">
                            <label><input type="radio" name="optradio"/>Option 2</label>
                          </div>
                          <div class="radio disabled">
                            <label><input type="radio" name="optradio"/>Option 3</label>
                          </div>
                              
							</div>
						</div>
                    </div>
                </div>

                <div className="col-sm-9 padding-right">
                    <div className="features_items">
                        <h2 className="title text-center">Features Items</h2>
                        <ProductItem
                            urlImg={"assets/images/home/product1.jpg"}
                            price={"$56"}
                            describe={"Easy Polo Black Edition"}
                        />
                        <ProductItem
                            urlImg={"assets/images/home/product1.jpg"}
                            price={"$56"}
                            describe={"Easy Polo Black Edition"}
                        />
                        <ProductItem
                            urlImg={"assets/images/home/product1.jpg"}
                            price={"$56"}
                            describe={"Easy Polo Black Edition"}
                        />
                        <ProductItem
                            urlImg={"assets/images/home/product1.jpg"}
                            price={"$56"}
                            describe={"Easy Polo Black Edition"}
                        />
                        <ProductItem
                            urlImg={"assets/images/home/product1.jpg"}
                            price={"$56"}
                            describe={"Easy Polo Black Edition"}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default ContentHome