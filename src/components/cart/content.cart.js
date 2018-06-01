import React, { Component } from "react";
class ContentCart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
  }
  componentWillMount() {
    let total = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      total +=
        Number(this.props.cart[i].price) * Number(this.props.cart[i].count);
    }
    this.setState({ total: total });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.cart.length !== this.props.cart.length) {
      let total = 0;
      for (let i = 0; i < nextProps.cart.length; i++) {
        total +=
          Number(nextProps.cart[i].price) * Number(nextProps.cart[i].count);
      }
      this.setState({ total: total });
    }
  }

  render() {
    return (
      <div>
        <section id="cart_items">
          <div class="container">
            <div class="breadcrumbs">
              <ol class="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="active">Shopping Cart</li>
              </ol>
            </div>
            <div class="table-responsive cart_info">
              <table class="table table-condensed">
                <thead>
                  <tr class="cart_menu">
                    <td class="image">Item</td>
                    <td class="description" />
                    <td class="price">Price</td>
                    <td class="quantity">Quantity</td>
                    <td class="total">Total</td>
                    <td />
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((element, index) => {
                    return (
                      <tr>
                        <td class="cart_product">
                          <a href="">
                            <img src={element.img} alt="" />
                          </a>
                        </td>
                        <td class="cart_description">
                          <h4>
                            <a href="">{element.name}</a>
                          </h4>
                          <p>Web ID: {element._id}</p>
                        </td>
                        <td class="cart_price">
                          <p>{element.price}</p>
                        </td>
                        <td class="cart_quantity">
                          <div class="cart_quantity_button">
                            <span
                              class="cart_quantity_up"
                              onClick={() => {
                                element.count += 1;
                                this.props.updateProductInCart(element);
                              }}
                            >
                              {" "}
                              +{" "}
                            </span>
                            <input
                              class="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={element.count}
                              autocomplete="off"
                              size="2"
                            />
                            <span
                              class="cart_quantity_down"
                              onClick={() => {
                                if (element.count === 1) {
                                  return;
                                }
                                element.count -= 1;
                                this.props.updateProductInCart(element);
                              }}
                            >
                              {" "}
                              -{" "}
                            </span>
                          </div>
                        </td>
                        <td class="cart_total">
                          <p class="cart_total_price">
                            {element.price * element.count}
                          </p>
                        </td>
                        <td class="cart_delete">
                          <a
                            class="cart_quantity_delete"
                            onClick={() =>
                              this.props.deteleProductInCart(element._id)
                            }
                          >
                            <i class="fa fa-times" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="do_action">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div class="total_area">
                  <ul>
                    <li>
                      Cart Sub Total <span>${this.state.total}</span>
                    </li>
                    <li>
                      Eco Tax <span>$0</span>
                    </li>
                    <li>
                      Shipping Cost <span>Free</span>
                    </li>
                    <li>
                      Total <span>${this.state.total}</span>
                    </li>
                  </ul>
                  <a class="btn btn-default update" href="">
                    Update
                  </a>
                  <a class="btn btn-default check_out" href="">
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ContentCart;
