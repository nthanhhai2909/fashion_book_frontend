import React, { Component } from 'react'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderBottom from '../header/header.bottom'
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
import ContentProductDetail from './cotent.product.detail'
class ProductDetail extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <HeaderTop />
                    <HeaderMiddle
                        islogin={this.props.islogin}
                        logout={() => this.props.logout}
                    />
                    <HeaderBottom />
                </header>
                <ContentProductDetail
                    category={this.props.category}
                    publisher={this.props.publisher}
                    mproductDetail={this.props.mproductDetail}      
                    nameCategory={this.props.nameCategory}                                  
                />
                <footer id="footer">
                    <FooterTop />
                    <FooterMiddle />
                    <FooterBottom />
                </footer>
            </div>
        )
    }
}
export default ProductDetail