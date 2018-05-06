import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Home from '../components/home/home'
import * as userActions from '../actions/user.action'
import * as homeActions from '../actions/home.action'
import Loading from '../components/loading/loading'
class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.auth()
        this.props.homeActions.getCategory()
        this.props.homeActions.getPublisher()
        this.props.homeActions.getBook()
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.page !== this.props.page) {
            this.props.homeActions.getBook()
        }
    }
    render() {
        const {category, publisher, book, totalpage} = this.props
        if(category !== null && publisher !== null && book !== null && totalpage !== null) {
            return (
                <div>
                    <Home
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
    islogin: state.userReducers.login.islogin,
    category: state.homeReducers.category.data,
    publisher: state.homeReducers.publisher.data,
    book: state.homeReducers.book.data, 
    totalpage: state.homeReducers.book.totalpage,
    page: state.homeReducers.book.page
})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(userActions, dispatch),
        homeActions: bindActionCreators(homeActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)