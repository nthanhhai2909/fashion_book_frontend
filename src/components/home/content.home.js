import React, { Component } from 'react'
import ProductItem from './product.item';
import { Link } from 'react-router-dom'
class ContentHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagination: []
        }
    }
    componentWillMount() {
        let tmp = []
        for (let i = 1; i <= this.props.totalpage; i++) {
            tmp.push(i);
        }
        this.setState({ pagination: tmp })
    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>Category</h2>
                                <div className="panel-group category-products" id="accordian">
                                    {
                                        this.props.category.map((element, index) => {
                                            return (
                                                <div key={index} className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h4 className="panel-title item-custom"><a key={index}>{element.name}</a></h4>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className="brands_products">
                                    <h2>Brands</h2>
                                    <div className="brands-name">
                                        <ul className="nav nav-pills nav-stacked">
                                            {this.props.publisher.map((element, index) => {
                                                return (
                                                    <li className="item-custom"item-custom><a> <span class="pull-right"></span>{element.name}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div class="price-range">
                                    <h2>Price Range</h2>
                                    <div class="well text-center">
                                        <div class="radio">
                                            <label><input type="radio" name="optradio" />Option 1</label>
                                        </div>
                                        <div class="radio">
                                            <label><input type="radio" name="optradio" />Option 2</label>
                                        </div>
                                        <div class="radio disabled">
                                            <label><input type="radio" name="optradio" />Option 3</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                <h2 className="title text-center">Features Items</h2>
                                {this.props.book.map((element, index) => {
                                    return (
                                        <ProductItem
                                            urlImg={element.img}
                                            price={element.price}
                                            describe={element.describe}
                                            id={element._id}
                                        />
                                    )
                                })}
                            </div>
                            <div className="">
                                <ul className="pagination pagination-custom">
                                    <li onClick={() => this.props.backPage()}
                                    ><Link to='/'>&laquo;</Link></li>
                                    {this.state.pagination.map((element, index) => {
                                        if(this.props.page === element) {
                                            return (
                                                <li className="active" onClick={() => this.props.setPage(element)}><Link to='/' >{element}</Link></li>
                                            )
                                        } else {
                                            return (
                                                <li onClick={() => this.props.setPage(element)}><Link to='/' >{element}</Link></li>
                                            )
                                        }
                                        
                                    })}
                                    <li onClick={() => this.props.nextPage()}
                                    ><Link to='/'>&raquo;</Link></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default ContentHome