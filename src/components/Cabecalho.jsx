import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import "./Cabecalho.scss"


export default function Cabecalho(){
    return(
        <div>
            <Navbar className="bg-custom" variant="dark" expand="lg">
                <Navbar.Brand href="#home" className="fs-3">Dream-Watch</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ml-5">
                    <Nav.Link href="#home" className="fs-5">Início</Nav.Link>
                    <Nav.Link href="#link" className="fs-5">Login</Nav.Link>
                    <Nav.Link href="#contact" className="fs-5">Solução</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>                
            <p>Global Solution 2023 - Engenharia de Software</p>
        </div>
    )
}