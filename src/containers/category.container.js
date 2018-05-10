import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Category from '../components/category/category'
import * as userActions from '../actions/user.action'
import * as homeActions from '../actions/home.action'
class CategoryContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.auth()
        this.props.homeActions.getCategory()
        this.props.homeActions.getPublisher()
        this.props.homeActions.getBook()
    }
    render() {
        return (
            <Category
                islogin={this.props.islogin}
                logout={() => this.props.actions.logout()}
                category={this.props.category}
                publisher={this.props.publisher}
                book={this.props.book}
                totalpage={this.props.totalpage}
                backPage={() => this.props.homeActions.backPage()}
                nextPage={() => this.props.homeActions.nextPage()}
                setPage={(page) => this.props.homeActions.setPage(page)}
                page={this.props.page}
                sortType={this.props.sortType}
                setSortType={(value) => this.props.homeActions.setSortType(value)}
                setRangeType={(range) => this.props.homeActions.setRangeType(range)}
            />
        )
    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    category: state.homeReducers.category.data,
    publisher: state.homeReducers.publisher.data,
    book: state.homeReducers.book.data,
    totalpage: state.homeReducers.book.totalpage,
    page: state.homeReducers.book.page,
    sortType: state.homeReducers.book.sortType
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        homeActions: bindActionCreators(homeActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)