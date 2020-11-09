import React from 'react';
import './App.scss';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card
} from 'reactstrap';
import logo from './logo.png'

function App() {
  return (
    <div className="divider" >
      <Jumbotron className='m-0 p-3 fades text-white'>
        <Container className='inner' >
          <div className="row align-items-center h-100">
            <div className='w-100'>
              <div className='text-center'>
                <img className='logo' src={logo} alt='img'></img>
                <h5 className=''>Strona w budowie...</h5>
              </div>
              <hr />
              <Container >
                <Row >
                  <Col />
                  <Col lg='4' md='12'>
                    <Card className='p-2 text-dark'>
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

export default App;
