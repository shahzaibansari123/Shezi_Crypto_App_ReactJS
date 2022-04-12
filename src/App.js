import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Exchanges,
} from "./components";
import "./App.css";

const app = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                {/* : means that part is dynamic it could be 1, 12 13 etc */}
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
  
      <div
        className="footer"
        
      >
        <Typography.Title level={5}
        style={{ color: "white", textAlign: "center" }}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchnges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
};

export default app;
