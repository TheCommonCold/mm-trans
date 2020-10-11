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
              <h1 className='thin'>Kontakt</h1>
              <hr></hr>
              <Row>
                <Col>
                  <h4 className='contant-title'>Biuro</h4>
                  <h6>Przemyska 34, 61-324 Poznań</h6>
                  <h6>+48 601 702 941</h6>
                  <h6>+48 603 747 474</h6>
                  <h6>biuro@mm-trans.pl</h6>
                </Col>
                <Col>
                  <h4 className='contant-title'>Kruszywa</h4>
                  <h6>Przemyska 34, 61-324 Poznań</h6>
                  <h6>+48 601 702 941</h6>
                  <h6>+48 603 747 474</h6>
                  <h6>biuro@mm-trans.pl</h6>
                </Col>
                <Col>
                  <h4 className='contant-title'>Beton</h4>
                  <h6>Przemyska 34, 61-324 Poznań</h6>
                  <h6>+48 601 702 941</h6>
                  <h6>Tel: +48 603 747 474</h6>
                  <h6>biuro@mm-trans.pl</h6>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default contactSection