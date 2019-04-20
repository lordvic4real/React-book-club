import React, { Component } from 'react';
import "./Layouts.css";
import {Link} from "@reach/router";
import {Menu, Dropdown, Icon } from 'antd';
class FrontendLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
         <header className="header">
         <div className="logo">
         <div><Link to="/">BRYTA BOOKS</Link></div>
         </div>
            
             
                 <nav className="menu"><div><Dropdown overlay={menu}><Link to ="/books"> <Icon type="book" />BOOKS <Icon type="down" /></Link></Dropdown></div>
                  <div><Link to= "/about">about</Link></div>
                  <div><Link to= "/about">faq</Link></div>
                  <div><Link to= "/sign" className="signin">sign in</Link></div>
                
             </nav>
         </header>
        );
    }
}
const menu = (
    <Menu>
        <Menu.Item><Link to="/bookk/top">top books</Link></Menu.Item>
        <Menu.Item><Link to="/bookk/top">top books</Link></Menu.Item>
        <Menu.Item><Link to="/bookk/top">top books</Link></Menu.Item>
        <Menu.Item><Link to="/bookk/top">top books</Link></Menu.Item>
    </Menu>
)
export default FrontendLayout;