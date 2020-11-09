import React, { Component } from 'react';
import Map from './map.js';
import {
  Jumbotron,
  Col,
  Row,
  Card,
} from 'reactstrap';
import Container from 'reactstrap/lib/Container';

class contactSection extends Component {

  render() {
    return (
      <Jumbotron className='p-4'>
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
                  <Card className='p-2'>
                    <h6>MM-TRANS</h6>
                    <h6>MARIUSZ GRYGIER, MARCIN GRYGIER SPÓŁKA JAWNA</h6>
                    <h6>Przemyska 34, 61-324 Poznań, Polska</h6>
                    <h6>Tel: +48 601 702 941</h6>
                    <h6>Email: biuro@mm-trans.pl</h6>
                  </Card>
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