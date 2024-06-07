import { Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/Authcontext';
const Cards = () => {
    const { data } = useAuth();
    console.log(data);
    return (
        <>
            <Row className="g-4 mt-5">
                    {
                        data && data.map((res) => {
                            return <Col lg={4}> <Card border="primary" >
                                <Card.Body>
                                    <Card.Title>{res.name}</Card.Title>
                                    <Card.Text>
                                        Email: {res.email}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            </Col>
                        })
                    }
               
            </Row>



        </>
    );
}

export default Cards;