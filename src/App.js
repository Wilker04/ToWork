import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './Components/Inicio.js';
import { Login } from './Components/Login.js';
import { Registrar } from './Components/Registrar.js';
import './Css/App.css';
import { Container, Ratio, Button, Form, Card, CardGroup, Col, Row, Alert, FormGroup, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Enrutador() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/Autenticar' element={<Autenticacion />}></Route>
    </Routes>
  );
}

export function Autenticacion() {
  return (
    <>
      <div className=' d-flex align-items-center justify-content-center bg-dark' style={{height: "100vh"}}>
        <Row className='p-5 shadow-xl no-gutters vw-100' style={{height: "50vh"}}>
          <Col className='col-md-6 p-5 shadow-lg bg-dark text-white'>
            <Login />
          </Col>
          <Col className='col-md-6 shadow-lg p-5' style={{backgroundColor: '#198754'}}>
            <Registrar />
          </Col>
        </Row>
      </div>
    </>
  );
}


export default Enrutador;