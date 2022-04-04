import React from "react";
import millify from "millify";
import { Row, Col, Statistic, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* antdesign have total 24 spaces so span of 12 is going to take half of the screen */}
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
