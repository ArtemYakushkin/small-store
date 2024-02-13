import React from "react";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "./ProductsList";

const NewArrival = ({ data, data2 }) => {
  return (
    <section className="arrival">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="section__title">New Arrivals</h2>
          </Col>
          <ProductsList data={data} />
          <ProductsList data={data2} />
        </Row>
      </Container>
    </section>
  );
};

export default NewArrival;
