import React, { Component } from 'react'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderBottom from '../header/header.bottom'
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
import ContentLoginRegister from './content.login.register'
const Home = ({ setEmailogin, setPasswordlogin, setEmail,
    setFirstname, setLastname, setAddress, setPhone, setPassword, setConfirm,
    notificationRegister, notificationLogin }) => (
        <div>
            <header id="header">
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <ContentLoginRegister
                setEmailogin setPasswordlogin setEmail
                setFirstname setLastname setAddress setPhone setPassword setConfirm
                notificationRegister notificationLogin
            />
            <footer id="footer">
                <FooterTop />
                <FooterMiddle />
                <FooterBottom />
            </footer>
        </div>

    )

export default Home