import React, { Component } from 'react'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderBottom from '../header/header.bottom'
import Content from './content'
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'

class Category extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <HeaderTop />
                    <HeaderMiddle
                        islogin={this.props.islogin}
                        logout={() => this.props.logout()}
                    />
                    <HeaderBottom
                        sortType={this.props.sortType}
                        setSortType={(value) => this.props.setSortType(value)}
                    />
                </header>
                <Content
                    category={this.props.category}
                    publisher={this.props.publisher}
                    book={this.props.book}
                    totalpage={this.props.totalpage}
                    backPage={() => this.props.backPage()}
                    nextPage={() => this.props.nextPage()}
                    setPage={(page) => this.props.setPage(page)}
                    page={this.props.page}
                    setRangeType={(range) => this.props.setRangeType(range)}
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
export default Category