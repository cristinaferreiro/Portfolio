import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.css';

function HomePage() {
    return (

        <div className="container-background">


            <Container>


                <Row>

                    <Col md={{ offset: 3, span: 6 }}>

                        <h1>hiiiii</h1>
                        {/* <Nav.Link as={Link} to="/about">Sobre mí</Nav.Link>
                               <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>

                    <hr /> */}


                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default HomePage;
