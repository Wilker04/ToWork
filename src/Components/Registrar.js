import { Container, Ratio, Button, Form, Card, CardGroup, Col, Row, Alert, FormGroup, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from '../Resources/fondo.png';
import '../Css/Registrar.css';

export function Registrar() {
    return (
        <>
            <div className="form-style">
                <h4 className="pb-3 text-white">Registrar</h4>
                <Form id='registrar'>
                    <Form.Group className="form-group pb-3">
                        <Form.Control type="email" className='text-dark' placeholder="Email" id="email" aria-describedby="emailHelp" />
                    </Form.Group>
                    <Form.Group className="form-group pb-3">
                        <Form.Control type="password" className='text-dark' placeholder="Contraseña" id="password" />
                    </Form.Group>
                    <div class="pb-4">
                        <Button type="submit" className="btn btn-dark w-100 font-weight-bold text-uppercase mt-2">¡Registrate</Button>
                    </div>
                </Form>
            </div>
        </>);
}