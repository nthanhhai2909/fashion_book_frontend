import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cart from "../components/cart/cart";
import * as productActions from "../actions/product.action";
import * as homeActions from "../actions/home.action";
import * as userActions from "../actions/user.action";
import * as cartActions from '../actions/cart.action'
class CartContainer extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.actions.auth()
    this.props.cartActions.getCart()
  }
  render() {
    return (
      <Cart
        islogin={this.props.islogin}
        sortType={this.props.sortType}
        logout={() => this.props.actions.logout()}
        sortType={this.props.sortType}
        setSortType={value => this.props.homeActions.setSortType(value)}
        searchTextSubmit={() => this.props.homeActions.searchTextSubmit()}
        setSearchText={value => this.props.homeActions.setSearchText(value)}
        history={this.props.history}
        cart={this.props.cart}
      />
    );
  }
}
const mapStateToProps = state => ({
  islogin: state.userReducers.login.islogin,
  cart: state.cartReducers.cart.data
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
    homeActions: bindActionCreators(homeActions, dispatch),
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
