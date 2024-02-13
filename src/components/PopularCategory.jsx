import React from "react";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "./ProductsList";

const PopularCategory = ({ data }) => {
  return (
    <section className="sales">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="section__title">Popular in Category</h2>
          </Col>
          <ProductsList data={data} />
        </Row>
      </Container>
    </section>
  );
};

export default PopularCategory;
