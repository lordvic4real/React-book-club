import React, { Component } from "react";
import "./Layouts.css";
import { Link } from "@reach/router";
import { Menu, Dropdown, Icon, Affix } from "antd";
class FrontendLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Affix offsetTop={0}>
          <header className="header">
            <div className="logo">
              <div>
                <Link to="/">BRYTA BOOKS</Link>
              </div>
            </div>

            <nav className="menu">
              <div>
                <Dropdown overlay={menu}>
                  <Link to="/books">
                    {" "}
                    <Icon type="book" />
                    BOOKS <Icon type="down" />
                  </Link>
                </Dropdown>
              </div>
              <div>
                <Link to="/about">about</Link>
              </div>
              <div>
                <Link to="/faq">faq</Link>
              </div>
              <div>
                <Link to="/sign" className="signin">
                  sign in
                </Link>
              </div>
            </nav>
          </header>
        </Affix>
        {this.props.children}
        <footer>
          <div style={style.footer}>&copy; BRYTAbooks 2019</div>
        </footer>
      </>
    );
  }
}
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/book/top">top books</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/book/latest">latest books</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/book/celeb">celeb books</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/book/react">react books</Link>
    </Menu.Item>
  </Menu>
);
const style = {
  footer: {
    height: "60px",
    width: "100%",
    backgroundColor: "#191918",
    color: "#545454",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
export default FrontendLayout;
