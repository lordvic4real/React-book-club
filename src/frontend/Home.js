import React, { Component } from "react";
import banner from "../images/fortnite.jpg";
import { Row, Col, Layout } from "antd";
import { Link } from "@reach/router";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Content } = Layout;
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
        <Layout style={{ padding: "0 20px" }} />
        <h4 className="front-title"> HOW IT WORKS</h4>
        <section>
          <Content>
            <Row style={{ height: "290px" }}>
              <Col span={8} style={{ height: "100%", textAlign: "center" }}>
                <img
                  src={banner}
                  style={{ maxWidth: "auto", height: "200px" }}
                  alt="image"
                />
                <p className="front-description">
                  schedule and post with bryta {""}
                </p>
              </Col>
              <Col span={8} style={{ height: "100%", textAlign: "center" }}>
                <img
                  src={banner}
                  style={{ maxWidth: "auto", height: "200px" }}
                  alt="image"
                />
                <p className="front-description">
                  schedule and post with bryta {""}
                </p>
              </Col>
              <Col span={8} style={{ height: "100%", textAlign: "center" }}>
                <img
                  src={banner}
                  style={{ maxWidth: "auto", height: "200px" }}
                  alt="image"
                />
                <p className="front-description">
                  schedule and post with bryta {""}
                </p>
              </Col>
            </Row>
          </Content>
        </section>
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
