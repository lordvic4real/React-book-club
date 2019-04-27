import React, { Component } from "react";
import banner from "../images/fortnite.jpg";
import { Row, Col, layout } from "antd";
import { Link } from "@reach/router";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Row style={{ height: "600px" }}>
          <Col span={12} style={styles.banner} align="center">
            the #1 website for <br /> book sales <br />
            <Link to="/signin" className="front-sign">
              create Account
            </Link>
          </Col>
          <Col
            span={12}
            style={{
              background: `url(${banner})`,
              backgroundSize: "cover",
              height: "100%"
            }}
          />
        </Row>
      </>
    );
  }
}
const styles = {
  banner: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.5rem",
    color: "#1b1615",
    fontWeight: 600,
    letterSpacing: "2.27px",
    lineHeight: 1.3,
    paddingBottom: "30px"
  },
  signup_div: {
    backgroundColor: "#f7f2ee",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    color: "#1b1615",
    fontWeight: 400,
    paddingBottom: "30px",
    lineHeight: 1.3,
    letterSpacing: "2.27"
  }
};
export default Home;
