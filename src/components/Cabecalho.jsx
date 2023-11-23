import { Navbar,  } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import "./Cabecalho.scss"


export default function Cabecalho(){
    return(
        <div>
            <Navbar className="bg-custom" variant="dark" expand="lg">
                <Navbar.Brand href="#home" className="fs-3 mx-auto">
                <Image
                    src='/logo.png'
                    style={{height:"60px", marginRight:"5px", marginLeft:"5px"}}
                    roundedCircle
                    />
                    DreamWatch</Navbar.Brand>
            </Navbar>                
            <p>Global Solution 2023 - Engenharia de Software - FIAP</p>
        </div>
    )
}