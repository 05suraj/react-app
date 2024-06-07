import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Form, Button, Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { users } from '../utils/utils';
import { useAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {  isLoggedIn,setIsLoggedIn, setIsAdmin } = useAuth();
    const [input, setInput] = useState('')

    const handleLogin = () => {
        const user = users.find(user => user.username === input);
        console.log(user)
        if (user) {
            setIsLoggedIn(true)
            setIsAdmin(user.isAdmin)
        } else {
         console.log("invalid user");
        }
      };
  
    return (
        <div>
           {!isLoggedIn &&  <Container>
                <Row className=" pt-5 justify-content-center align-items-center">
                    <Col md={8} lg={5} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h4 className="fw-bold mb-2 text-center">Login</h4>
                                    <div className="mb-3">
                                            <Form.Group className="mb-3" controlId="username">
                                                <Form.Label>Enter username</Form.Label>
                                                <Form.Control onChange={(e)=> setInput(e.target.value)} placeholder="Enter username" />
                                            </Form.Group>
                                            <Button variant="primary" onClick={handleLogin} type="submit">
                                                Login
                                            </Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>} 

        </div>
    )
}

export default Login