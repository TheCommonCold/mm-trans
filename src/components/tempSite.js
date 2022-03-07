import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card
} from 'reactstrap';
import logo from '../logo.png'
import './temp.scss';

function TempSite() {
  return (
    <div className="temp-divider" >
      <Jumbotron className='m-0 p-3 fades temp-fades text-white'>
        <Container className='temp-inner' >
          <div className="row align-items-center h-100">
            <div className='w-100 temp-color'>
              <div className='text-center'>
                <img className='temp-logo' src={logo} alt='img'></img>
                <h3 className='m-3'>Strona w budowie...</h3>
              </div>
              <hr className='temp-hr' />
              <Container >
                <Row >
                  <Col />
                  <Col lg='4' md='12'>
                    <Card className='p-2 text-dark temp-card'>
                      <h6>MM-TRANS MARIUSZ GRYGIER, MARCIN GRYGIER SPÓŁKA JAWNA</h6>
                      <h6>Przemyska 34, 61-324 Poznań, Polska</h6>
                      <h6>Tel: +48 601 702 941</h6>
                      <h6>Email: biuro@mm-trans.pl</h6>
                    </Card>
                  </Col>
                  <Col />
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div >
  );
}

export default TempSite;
