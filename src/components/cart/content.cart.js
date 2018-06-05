import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
class ContentCart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      show: false,
      name: "",
      phone: "",
      city: { name: "", code: null },
      district: { name: "", code: null },
      ward: { name: "", code: null },
      address: "",
      notiName: "",
      notiPhone: "",
      notiAddress: "",
      notiDetailAddress: ""
    };
  }
  componentWillMount() {
    let total = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      total +=
        Number(this.props.cart[i].price) * Number(this.props.cart[i].count);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.cart !== this.props.cart) {
      let total = 0;
      for (let i = 0; i < nextProps.cart.length; i++) {
        total +=
          Number(nextProps.cart[i].price) * Number(nextProps.cart[i].count);
      }
      this.setState({ total: total });
    }
  }
  handlePayment = () => {
    if (!this.props.islogin) {
      this.setState({ show: true });
      return;
    } else {
      this.setState({ show: false });
    }
    let check = true;
    if (this.state.name.length < 3) {
      this.setState({
        notiName: "Name invalid"
      });
      check = false;
    } else {
      this.setState({
        notiName: ""
      });
    }
    if (!this.isvaidPhone(this.state.phone)) {
      this.setState({
        notiPhone: "Phone invalid"
      });
      check = false;
    } else {
      this.setState({ notiPhone: "" });
    }
    if (
      this.state.city.name === "" ||
      this.state.district.name === "" ||
      this.state.ward.name === ""
    ) {
      this.setState({
        notiAddress: "Address invalid"
      });
      check = false;
    } else {
      this.setState({
        notiAddress: ""
      });
    }
    if (this.state.address === "") {
      this.setState({ notiDetailAddress: "Address invalid" });
      check = true;
    } else {
      this.setState({ notiDetailAddress: "" });
    }
    if (check === false) return;
    this.props.payment(
      this.state.city.name,
      this.state.district.name,
      this.state.ward.name,
      this.state.address,
      this.state.phone,
      this.state.name
    );
  };
  isvaidPhone = phone => {
    if (phone.length < 10 || phone.length > 11) return false;
    for (let i = 0; i < phone.length; i++) {
      if (phone.charAt(i) < "0" || phone.charAt(i) > "9") return false;
    }
    return true;
  };
  handleSelectCity(value) {
    let city = value.split("/");
    let name = city[0];
    let code = city[1];
    this.setState({
      city: { name: name, code: code }
    });
    this.props.getDistrict(code);
  }
  handleSelectDistrict(value) {
    let district = value.split("/");
    let name = district[0];
    let code = district[1];
    this.setState({
      district: { name: name, code: code }
    });
    this.props.getWard(this.state.city.code, code);
  }
  handleSelectWard(value) {
    let ward = value.split("/");
    let name = ward[0];
    let code = ward[1];
    this.setState({
      ward: { name: name, code: code }
    });
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
              <div className="col-md-6">
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
                  <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    container={this}
                    aria-labelledby="contained-modal-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title">
                        Notification
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please sign in to continue!!!</Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => this.setState({ show: false })}>
                        <a>Cancel</a>
                      </Button>
                      <Button onClick={this.handleHide}>
                        <Link to="/login_register">Login</Link>
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Link class="btn btn-default check_out" to={"/"}>
                    Continue shopping
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="chose_area">
                  <ul class="user_option">
                    <li>
                      <label>Name</label>
                      <input
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                      <span>{this.state.notiName}</span>
                    </li>
                    <li>
                      <label>Phone</label>
                      <input
                        type="text"
                        value={this.state.phone}
                        onChange={e => this.setState({ phone: e.target.value })}
                      />
                      <span>{this.state.notiPhone}</span>
                    </li>
                  </ul>
                  <ul className="user_info">
                    <li className="single_field">
                      <label>Province / city</label>
                      <select
                        value={this.props.city.name}
                        onChange={e => this.handleSelectCity(e.target.value)}
                      >
                        <option
                          value=""
                          disabled
                          selected
                          style={{display:'none'}}
                        >
                          Province / city
                        </option>
                        {this.props.city.map((element, index) => {
                          return (
                            <option value={element.name + "/" + element.code}>
                              {element.name}
                            </option>
                          );
                        })}
                      </select>
                    </li>
                    <li className="single_field">
                      <label>District</label>
                      <select
                        value={this.state.district.name}
                        onChange={e =>
                          this.handleSelectDistrict(e.target.value)
                        }
                      >
                        <option
                          value=""
                          disabled
                          selected
                          style={{display:'none'}}
                        >
                          District
                        </option>
                        {this.props.district.map((element, index) => {
                          return (
                            <option value={element.name + "/" + element.code}>
                              {element.name}
                            </option>
                          );
                        })}
                      </select>
                    </li>
                    <li className="single_field">
                      <label>Ward</label>
                      <select
                        value={this.state.ward.name}
                        onChange={e => this.handleSelectWard(e.target.value)}
                      >
                        <option
                          value=""
                          disabled
                          selected
                          style={{display:'none'}}
                        >
                          Ward
                        </option>
                        {this.props.ward.map((element, index) => {
                          return (
                            <option value={element.name + "/" + element.code}>
                              {element.name}
                            </option>
                          );
                        })}
                      </select>
                    </li>
                    <span>{this.state.notiAddress}</span>
                  </ul>
                  <ul className="user_option">
                    <li>
                      <label>Address</label>
                      <input
                        type="text"
                        value={this.state.address}
                        onChange={e =>
                          this.setState({ address: e.target.value })
                        }
                      />
                      <span>{this.state.notiDetailAddress}</span>
                    </li>
                  </ul>
                  <a
                    className="btn btn-default update"
                    onClick={() => this.handlePayment()}
                  >
                    Payment
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
