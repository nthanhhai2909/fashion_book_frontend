import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  ProductDetail from '../components/product.detail/product.detail'
import * as homeActions from '../actions/home.action'
class ProductDetailContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.homeActions.getCategory()
        this.props.homeActions.getPublisher()
    }
    render() {
        return (
            <div>
                <ProductDetail
                category={this.props.category}
                publisher={this.props.publisher}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    category: state.homeReducers.category.data,
    publisher: state.homeReducers.publisher.data
})
const mapDispatchToProps = dispatch =>{
    return ({
        homeActions: bindActionCreators(homeActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetailContainer)