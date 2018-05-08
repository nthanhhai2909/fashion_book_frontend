import {Link} from 'react-router-dom'
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
        this.state = {
            notiUpdateInfor: ''
        }
    }
    componentWillMount() { 
        if(this.props.isupdate) {
            this.setState({notiUpdateInfor: "UPDATE SUCCESS"})
        }
        else if(this.props.isupdate === false) {
            this.setState({notiUpdateInfor: "UPDATE FAIL"})
        }
        else {
            this.setState({notiUpdateInfor: ""})
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.isupdate === true) {
            return this.setState({notiUpdateInfor: "UPDATE SUCCESS"})
        }
        else if(nextProps.isupdate === false) {
            return this.setState({notiUpdateInfor: "UPDATE FAIL"})
        }
        else {
            return this.setState({notiUpdateInfor: ""})
        }
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
                                        <p className="error">{this.state.notiUpdateInfor}</p>
                                        <input type="text"
                                            disabled
                                            placeholder="Email"
                                            value={this.props.email}
                                        />
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            value={this.props.firstName}
                                            onChange={(e) => this.props.setFirstName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            value={this.props.lastName}
                                            onChange={(e) => this.props.setLastName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            value={this.props.address}
                                            onChange={(e) => this.props.setAddress(e.target.value)}
                                        />
                                        <input
                                            type="tell"
                                            placeholder="Phone number"
                                            value={this.props.phone_number}
                                            onChange={(e) => this.props.setPhoneNumber(e.target.value)}
                                        />
                                        <button onClick={() => this.props.updateInfor()} className="btn btn-primary" >update</button>
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