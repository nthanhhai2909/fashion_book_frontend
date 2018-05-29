import React, { Component } from "react";
import HeaderTop from "../header/header.top";
import HeaderMiddle from "../header/header.middle";
import HeaderBottom from "../header/header.bottom";
import FooterTop from "../footer/footer.top";
import FooterMiddle from "../footer/footer.middle";
import FooterBottom from "../footer/footer.bottom";
import ContentCart from "./content.cart";
class Cart extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header id="header">
          <HeaderTop />
          <HeaderMiddle
            islogin={this.props.islogin}
            logout={() => this.props.logout()}
            history={this.props.history}
          />\
          <HeaderBottom
            sortType={this.props.sortType}
            setSortType={value => this.props.setSortType(value)}
            setSearchText={value => this.props.setSearchText(value)}
            searchTextSubmit={() => this.props.searchTextSubmit()}
          />
        </header>
        <ContentCart cart={this.props.cart} />
        <footer id="footer">
          <FooterTop />
          <FooterMiddle />
          <FooterBottom />
        </footer>
      </div>
    );
  }
}
export default Cart;