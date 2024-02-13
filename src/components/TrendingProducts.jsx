import React from "react";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "./ProductsList";

const TrendingProducts = ({ data }) => {
  return (
    <section className="trending">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductsList data={data} />
        </Row>
      </Container>
    </section>
  );
};

export default TrendingProducts;
