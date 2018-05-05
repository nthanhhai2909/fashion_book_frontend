import React, { Component } from 'react'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderBottom from '../header/header.bottom'
import ContentHome from './content.home'
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
const Home = ({ islogin, logout, category, publisher }) => (
    <div>
        <header id="header">
            <HeaderTop />
            <HeaderMiddle
                islogin={islogin}
                logout={() => logout}
            />
            <HeaderBottom />
        </header>
        <ContentHome
            category={category}
            publisher={publisher}
        />
        <footer id="footer">
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </footer>
    </div>

)

export default Home
