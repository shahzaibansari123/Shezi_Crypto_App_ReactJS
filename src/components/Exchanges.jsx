import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  // premium plan on rapid api neede to directly i.e on /exchanges fetch the endpoints and that why i did conditionaly rendering below as data dnf

  if (isFetching) return <Loader />;

  return (
    <>
      {exchangesList ? (
        <div>
          <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
          </Row>
          <Row>
            {exchangesList.map((exchange) => (
              <Col span={24}>
                <Collapse>
                  <Panel
                    key={exchange.id}
                    showArrow={false}
                    header={
                      <Row key={exchange.id}>
                        <Col span={6}>
                          <Text>
                            <strong>{exchange.rank}.</strong>
                          </Text>
                          <Avatar
                            className="exchange-image"
                            src={exchange.iconUrl}
                          />
                          <Text>
                            <strong>{exchange.name}</strong>
                          </Text>
                        </Col>
                        <Col span={6}>${millify(exchange.volume)}</Col>
                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                        <Col span={6}>{millify(exchange.marketShare)}%</Col>
                      </Row>
                    }
                  >
                    {HTMLReactParser(exchange.description || "")}
                  </Panel>
                </Collapse>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <p className="dnf-exchanges">Data Not Found </p>
      )}
    </>
  );
};

export default Exchanges;
