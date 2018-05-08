import React, { Component } from 'react'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderBottom from '../header/header.bottom'
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
class Profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <header id="header">
                    <HeaderTop />
                    <HeaderMiddle
                        islogin={this.props.islogin}
                        logout={() => this.props.logout()}
                    />
                    <HeaderBottom />
                </header>
                <section id="cart_items">
                    <div className="container">
                        <div className="breadcrumbs">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li className="active">Profile</li>
                            </ol>
                        </div>
                        <div className="shopper-informations">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="shopper-info">
                                        <p>USER INFORMATIONS</p>
                                        <input type="text" placeholder="Email" />
                                        <input type="text" placeholder="First name" />
                                        <input type="text" placeholder="Last name" />
                                        <input type="text" placeholder="Address" />
                                        <input type="text" placeholder="Phone number" />
                                        <a className="btn btn-primary" href="">update</a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="shopper-info">
                                        <p>UPDATE PASSWORD</p>
                                        <input type="password" placeholder="Old password" />
                                        <input type="password" placeholder="New Password" />
                                        <input type="password" placeholder="Confirm" />
                                        <a className="btn btn-primary" href="">update</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="footer">
                    <FooterTop />
                    <FooterMiddle />
                    <FooterBottom />
                </footer>
            </div>
        )
    }
}
export default Profile