import React, { Component } from "react";
import HeaderTop from "../header/header.top";
import HeaderMiddle from "../header/header.middle";
import FooterTop from "../footer/footer.top";
import FooterMiddle from "../footer/footer.middle";
import FooterBottom from "../footer/footer.bottom";
class HistoryPurchase extends Component {
  constructor(props) {
    super(props);
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
          />
        </header>
        <div>
          <section id="cart_items">
            <div className="container">
              <div class="breadcrumbs">
                <ol class="breadcrumb">
                  <li>
                    <a href="#">Purchase history</a>
                  </li>
                </ol>
              </div>
              <div className="table-responsive cart_info">
                <span>ID: 9035345345</span> 
                <span>Date: DD/MM/YYYY</span>
                <span>Total: 59$</span>
                <span className="destroy">Destroy</span>
                <table className="table table-condensed">
                  <thead>
                    <tr className="cart_menu">
                      <td className="image">Item</td>
                      <td className="description" />
                      <td className="price">Price</td>
                      <td className="quantity">Quantity</td>
                      <td className="total">Total</td>
                      <td />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cart_product">
                        <a href="">image</a>
                      </td>
                      <td className="cart_description">
                        <h4>
                          <a>description </a>
                        </h4>
                        <p>Web ID:</p>
                      </td>
                      <td className="cart_price">
                        <p>price</p>
                      </td>
                      <td className="cart_quantity">
                        <div className="cart_quantity_button">
                          <input
                            className="cart_quantity_input"
                            type="text"
                            name="quantity"
                            value="d"
                            autocomplete="off"
                            size="2"
                          />
                        </div>
                      </td>
                      <td className="cart_total">
                        <p className="cart_total_price">total</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive cart_info">
              <span>ID: 9035345345 </span> 
              <span>Date: DD/MM/YYYY</span>
              <span>Total: 59$</span>
                <span className="destroy_disable">Destroy</span>
                <table className="table table-condensed">
                  <thead>
                    <tr className="cart_menu">
                      <td className="image">Item</td>
                      <td className="description" />
                      <td className="price">Price</td>
                      <td className="quantity">Quantity</td>
                      <td className="total">Total</td>
                      <td />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cart_product">
                        <a href="">image</a>
                      </td>
                      <td className="cart_description">
                        <h4>
                          <a>description </a>
                        </h4>
                        <p>Web ID:</p>
                      </td>
                      <td className="cart_price">
                        <p>price</p>
                      </td>
                      <td className="cart_quantity">
                        <div className="cart_quantity_button">
                          <input
                            className="cart_quantity_input"
                            type="text"
                            name="quantity"
                            value="d"
                            autocomplete="off"
                            size="2"
                          />
                        </div>
                      </td>
                      <td className="cart_total">
                        <p className="cart_total_price">total</p>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <footer id="footer">
          <FooterTop />
          <FooterMiddle />
          <FooterBottom />
        </footer>
      </div>
    );
  }
}
export default HistoryPurchase;
