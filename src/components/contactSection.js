import React, { Component } from 'react';
import Map from './map.js';
import {
  Jumbotron,
  Col,
  Row
} from 'reactstrap';
import Container from 'reactstrap/lib/Container';

class contactSection extends Component {

  render() {
    return (
      <Jumbotron className='bg-light p-4'>
        <Row>
          <Col>
            <Map />
          </Col>
          <Col>
            <Container>
              <h1>Kontakt</h1>
              <p>Przemyska 34, 61-324 Poznań</p>
              <p>Tel: +48 601 702 941 </p>
              <p>Tel: +48 603 747 474</p>
              <p>Email : biuro@mm-trans.pl</p>
            </Container>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default contactSection