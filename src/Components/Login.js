import { Container, Ratio, Button, Form, Card, CardGroup, Col, Row, Alert, FormGroup, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Login.css';

export function Login() {
    return (
        <>
            <div className="form-style bg-dark">
                <h4 className="pb-3">Login</h4>
                <Form id='login'>
                    <Form.Group className="form-group pb-3">
                        <Form.Control className='bg-dark text-white' type="email" placeholder="Email" id="email" aria-describedby="emailHelp" />
                    </Form.Group>
                    <Form.Group className="form-group pb-3">
                        <Form.Control type="password" placeholder="Contraseña" className='bg-dark text-white' id="password" />
                    </Form.Group>
                    <div class="pb-4">
                        <Button type="submit" className="btn btn-success w-100 font-weight-bold text-uppercase mt-2">Logeate</Button>
                    </div>
                </Form>
            </div>
        </>);
}