import React from "react";
import "./Home.scss"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Home(){

    const userObj = JSON.parse(sessionStorage.getItem("user-obj"))
    let nomeUsuario = "Convidado"

    if (userObj) {
        nomeUsuario = userObj.nome        
        console.log(`Nome do usuário: ${nomeUsuario}`)
    }
    else{
        console.log("Objeto do usuário não encontrado no sessionStorage")
    }

    return(
        <div className="nomeUsuario">
            <h2>Bem-vindo, {nomeUsuario}!</h2>
        <div className="container">
            <main>
            <Image  src='/dreamwatch.jpg'
                    style={{height:"607px", width: "752px", marginRight:"5px", marginLeft:"5px", border:"5px solid black"}}
                    />
            </main>
            <aside className="aside1">
                <h3>Nossa solução</h3>
                <p>
            O projeto propõe uma solução inovadora para monitorar a qualidade do sono por meio de um aplicativo que utiliza sensores integrados a dispositivos comuns, como smartphones e dispositivos vestíveis. Esses sensores capturam dados em tempo real, incluindo padrões de movimento, frequência cardíaca e possíveis distúrbios respiratórios, proporcionando uma análise mais precisa e abrangente do sono. O objetivo é superar as limitações dos métodos tradicionais, promovendo uma compreensão mais profunda dos padrões de sono para melhorar a saúde geral.</p>
            </aside>
            <aside className="aside2">
                <h3>O que ela fará</h3>
                <p>
                A solução proposta consiste em um aplicativo que utiliza sensores integrados a dispositivos comuns, como smartphones e wearables, para monitorar em tempo real os padrões de sono do usuário. Os sensores medem movimento, frequência cardíaca e distúrbios respiratórios, proporcionando uma análise precisa e abrangente do sono. Superando limitações dos métodos tradicionais, a solução visa promover uma compreensão mais profunda dos hábitos de sono e contribuir para a saúde geral do usuário.</p>
            </aside>
            <aside className="aside3">
            <h3>Como funcionará</h3>
                <p>
                A solução proposta é um aplicativo inovador que utiliza sensores em dispositivos como smartphones e wearables para monitorar em tempo real os padrões de sono do usuário, incluindo movimentos, frequência cardíaca e distúrbios respiratório. Proporciona uma análise abrangente e precisa, promovendo uma gestão mais eficaz da saúde por meio de uma compreensão profunda e acessível dos hábitos de sono. A interface intuitiva facilita o acesso contínuo às análises para um acompanhamento prático e consciente da qualidade do sono.</p>
            </aside>
            <article className="article1">
            <Image  src='/logo.png'
                    style={{height:"250px", marginRight:"5px", marginLeft:"5px"}}
                    roundedCircle
                    />
            </article>
            <article className="article2">
            <h3>Sobre a solução</h3>
                <p>
                O aplicativo inovador usa sensores em dispositivos comuns para monitorar em tempo real os padrões de sono, oferecendo análises precisas e acessíveis para promover uma gestão eficaz da saúde do usuário.</p>
            </article>
        </div>
            
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mx-auto">
                    <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mx-auto">
                <Card className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mx-auto">
                <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}