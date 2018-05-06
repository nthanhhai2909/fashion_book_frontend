import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductDetail from '../components/product.detail/product.detail'
import * as productActions from '../actions/product.action'
import * as homeActions from '../actions/home.action'
class ProductDetailContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.homeActions.getCategory()
        this.props.homeActions.getPublisher()
        this.props.productActions.getBookDetail(this.props.match.params.id)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.mproductDetail !== null) {
            this.props.productActions.getNameCategoryByID(nextProps.mproductDetail.id_category)
        }

    }

    render() {
        if(this.props.mproductDetail && this.props.nameCategory) {
            return (
                <div>
                    <ProductDetail
                        category={this.props.category}
                        publisher={this.props.publisher}
                        mproductDetail={this.props.mproductDetail}
                        nameCategory={this.props.nameCategory}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                    "asdad"
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => ({
    category: state.homeReducers.category.data,
    publisher: state.homeReducers.publisher.data,
    mproductDetail: state.productReducers.product.productDetail,
    nameCategory: state.productReducers.product.nameCategory
})
const mapDispatchToProps = dispatch => {
    return ({
        homeActions: bindActionCreators(homeActions, dispatch),
        productActions: bindActionCreators(productActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetailContainer)