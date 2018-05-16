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
    componentWillReceiveProps(nextProps) {
        if (nextProps.totalpage !== this.props.totalpage) {
            let tmp = []
            for (let i = 1; i <= nextProps.totalpage; i++) {
                tmp.push(i);
            }
            this.setState({ pagination: tmp })
        }
    }
    renderPagination() {
        if (this.state.pagination.length === 0) {
            return null
        }
        else {
            return (
                <ul className="pagination pagination-custom">
                    <li onClick={() => this.props.backPage()}
                    ><Link to='/'>&laquo;</Link></li>
                    {
                        this.state.pagination.map((element, index) => {
                            if (this.props.page === element) {
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
            )
        }
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
                                                <div key={index}
                                                    onClick={() => {
                                                        this.props.setTitle(element.name)
                                                        this.props.setBranch('category')
                                                        this.props.setIDBranch(element._id)
                                                        this.props.branchClick('category', element._id)
                                                    }}
                                                    className="panel panel-default">
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
                                                    <li
                                                        onClick={() => {
                                                            this.props.setTitle(element.name)
                                                            this.props.setBranch('publisher')
                                                            this.props.setIDBranch(element._id)
                                                            this.props.branchClick('category', element._id)
                                                        }}
                                                        className="item-custom" item-custom><a> <span className="pull-right"></span>{element.name}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <div className="brands_products">
                                    <h2>AUTHOR</h2>
                                    <div className="brands-name">
                                        <ul className="nav nav-pills nav-stacked">
                                            {this.props.author.map((element, index) => {
                                                return (
                                                    <li
                                                        onClick={() => {
                                                            this.props.setTitle(element.name)
                                                            this.props.setBranch('author')
                                                            this.props.setIDBranch(element._id)
                                                            this.props.branchClick('category', element._id)
                                                        }}
                                                        className="item-custom" item-custom><a> <span className="pull-right"></span>{element.name}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="price-range">
                                    <h2>Price Range</h2>
                                    <div className="well ">
                                        <div className="radio">
                                            <label onClick={() => this.props.setRangeType(null)}><input type="radio" name="optradio" />ALl price</label>
                                        </div>
                                        <div className="radio">
                                            <label onClick={() => this.props.setRangeType({ low: 0, high: 20 })}><input type="radio" name="optradio" />0 ---- 20 USD</label>
                                        </div>
                                        <div className="radio disabled">
                                            <label onClick={() => this.props.setRangeType({ low: 20, high: 50 })}><input type="radio" name="optradio" />20 ---- 50 USD</label>
                                        </div>
                                        <div className="radio disabled">
                                            <label onClick={() => this.props.setRangeType({ low: 50, high: 100 })}><input type="radio" name="optradio" />50 ---- 100 USD</label>
                                        </div>
                                        <div className="radio disabled">
                                            <label onClick={() => this.props.setRangeType({ low: 100, high: 1000 })}><input type="radio" name="optradio" /> >= 100 USD</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                <h2 className="title text-center">{this.props.branch} {this.props.title}</h2>
                                {this.props.book.map((element, index) => {
                                    return (
                                        <ProductItem
                                            book={element}
                                            urlImg={element.img}
                                            price={element.price}
                                            describe={element.describe}
                                            id={element._id}
                                            addToCart={(product) => this.props.addToCart(product)}
                                        />
                                    )
                                })}
                            </div>
                            <div >
                                {this.renderPagination()}
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default ContentHome