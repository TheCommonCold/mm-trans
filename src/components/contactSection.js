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
      <Jumbotron className='bg-light'>
        <Row>
          <Col>
            <Container fluid className="p-0">
              <h1 className='thin'>Kontakt</h1>
              <hr></hr>
              <Row className='pb-3'>
                <Col sm='12' lg='4'>
                  <Card className='p-2 m-2'>
                    <h4 className='contant-title'>Biuro</h4>
                    <h6>Przemyska 34, 61-324 Poznań</h6>
                    <h6>+48 601 702 941</h6>
                    <h6>+48 603 747 474</h6>
                    <h6>biuro@mm-trans.pl</h6>
                  </Card>
                </Col>
                <Col sm='12' lg='4'>
                  <Card className='p-2 m-2'>
                    <h4 className='contant-title'>Kruszywa</h4>
                    <h6>Przemyska 34, 61-324 Poznań</h6>
                    <h6>+48 601 702 941</h6>
                    <h6>+48 603 747 474</h6>
                    <h6>biuro@mm-trans.pl</h6>
                  </Card>
                </Col>
                <Col sm='12' lg='4'>
                  <Card className='p-2 m-2'>
                    <h4 className='contant-title'>Beton</h4>
                    <h6>Przemyska 34, 61-324 Poznań</h6>
                    <h6>+48 601 702 941</h6>
                    <h6>+48 603 747 474</h6>
                    <h6>biuro@mm-trans.pl</h6>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm='12' md='6'>
            <Map />
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default contactSection