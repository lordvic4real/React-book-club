import React, { Component } from "react";
import FrontendLayout from "./frontend/Layouts";
import { Router } from "@reach/router";
import "antd/dist/antd.css";
import Home from "./frontend/Home";
class App extends Component {
  render() {
    return (
      <Router>
        <FrontendLayout path="/">
          <Home path="/" />
        </FrontendLayout>
      </Router>
    );
  }
}

export default App;
