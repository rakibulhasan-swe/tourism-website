import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const TopPlaces = () => {
    return (
        <Container className='py-5'>
            <h4 className='fs-1 fw-bold text-center py-3'>TOP PLACE'S</h4>
            <Row>
                <Col sm={12} md={4} lg={4}>
                    <Card className='shadow' style={{ cursor: 'pointer' }}>
                        <Card.Img variant="top" src="https://triper.dexignlab.com/react/static/media/pic1.577e43b0.jpg" />
                        <Card.Body>
                            <Card.Title className='pb-2 fw-bold'>Tokyo, Japan</Card.Title>
                            <Card.Text>
                            <small>Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods....</small> 
                            </Card.Text>
                            <Button variant="primary w-100">More Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <Card className='shadow' style={{ cursor: 'pointer' }}>
                        <Card.Img variant="top" src="https://triper.dexignlab.com/react/static/media/pic2.22b11b02.jpg" />
                        <Card.Body>
                            <Card.Title className='pb-2 fw-bold'>Madrid, Spain</Card.Title>
                            <Card.Text>
                            <small>Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez....</small> 
                            </Card.Text>
                            <Button variant="primary w-100">More Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <Card className='shadow' style={{ cursor: 'pointer' }}>
                        <Card.Img variant="top" src="https://triper.dexignlab.com/react/static/media/pic3.34a4ed08.jpg" />
                        <Card.Body>
                            <Card.Title className='pb-2 fw-bold'>Rome, Italy</Card.Title>
                            <Card.Text>
                            <small>3 days is a lovely amount of time to spend in Rome. While not enough to see 'everything', three days in Rome are sufficient to visit Rome's most famous sites, taste Rome's best food and also...</small> 
                            </Card.Text>
                            <Button variant="primary w-100">More Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TopPlaces;
