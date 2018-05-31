import React, { Component } from "react"
class ContentCart extends Component {
  constructor() {
    super();
  }
  render() {
    return (
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
                          <img src={element.img} alt=""/>
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
                          <span class="cart_quantity_up" onClick={() => {
                            element.count += 1
                            this.props.updateProductInCart(element)
                          }} >
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
                          <span class="cart_quantity_down" 
                          onClick={() => {
                            if(element.count === 1) {
                              return
                            }
                            element.count -= 1
                            this.props.updateProductInCart(element)
                          }}
                          >
                            {" "}
                            -{" "}
                          </span>
                        </div>
                      </td>
                      <td class="cart_total">
                        <p class="cart_total_price">{element.price * element.count}</p>
                      </td>
                      <td class="cart_delete">
                        <a class="cart_quantity_delete" href="">
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
    );
  }
}
export default ContentCart;
