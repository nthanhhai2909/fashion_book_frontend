import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductDetail from '../components/product.detail/product.detail'
import * as productActions from '../actions/product.action'
import * as homeActions from '../actions/home.action'
import Loading from '../components/loading/loading'
class ProductDetailContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.homeActions.getCategory()
        this.props.homeActions.getPublisher()
        this.props.productActions.getBookDetail(this.props.match.params.id)
        this.props.productActions.getBookRelated(this.props.match.params.id)
        
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.mproductDetail !== null ) {
            this.props.productActions.getNameCategoryByID(nextProps.mproductDetail.id_category)
            this.props.productActions.getNamePubliserByID(nextProps.mproductDetail.id_nsx)
        }

    }

    render() {
        if(this.props.mproductDetail && this.props.nameCategory && this.props.namePublicsher) {
            return (
                <div>
                    <ProductDetail
                        category={this.props.category}
                        publisher={this.props.publisher}
                        mproductDetail={this.props.mproductDetail}
                        nameCategory={this.props.nameCategory}
                        namePublicsher={this.props.namePublicsher}
                        islogin={this.props.islogin}
                        setSearchText={(value) => this.props.homeActions.setSearchText(value)}
                        sortType={this.props.sortType}
                        setSortType={(value) => this.props.homeActions.setSortType(value)}
                        searchTextSubmit={() => this.props.homeActions.searchTextSubmit()}
                        bookrelated={this.props.bookrelated}
                    />
                </div>
            )
        }
        else {
            return (
                <Loading/>
            )
        }
        
    }
}

const mapStateToProps = state => ({
    category: state.homeReducers.category.data,
    publisher: state.homeReducers.publisher.data,
    mproductDetail: state.productReducers.product.productDetail,
    nameCategory: state.productReducers.product.nameCategory,
    namePublicsher: state.productReducers.product.namePublicsher,
    islogin: state.userReducers.login.islogin,
    bookrelated: state.productReducers.product.bookrelated
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