import React from "react";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "./ProductsList";

const BestSales = ({ data }) => {
  return (
    <section className="sales">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="section__title">Best Sales</h2>
          </Col>
          <ProductsList data={data} />
        </Row>
      </Container>
    </section>
  );
};

export default BestSales;
