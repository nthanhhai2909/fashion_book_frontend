import React, { Component } from 'react'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderBottom from '../header/header.bottom'
import ContentHome from './content.home'
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
const Home = () => (
    <div>
        <header id="header">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </header>
        <ContentHome />
        <footer id="footer">
            <FooterTop/>
            <FooterMiddle/>
            <FooterBottom/>
        </footer>
    </div>

)

export default Home
