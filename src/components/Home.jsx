import React from "react";
import "./Home.scss"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Home(){
    return(
        <div className="container">
            <main>
            <Image  src='/dreamwatch.jpg'
                    style={{height:"607px", width: "752px", marginRight:"5px", marginLeft:"5px", border:"5px solid black"}}
                    />
            </main>
            <aside className="aside1">
                <h3>O que é a solução</h3>
                <p>
            O projeto propõe uma solução inovadora para monitorar a qualidade do sono por meio de um aplicativo que utiliza sensores integrados a dispositivos comuns, como smartphones e dispositivos vestíveis. Esses sensores capturam dados em tempo real, incluindo padrões de movimento, frequência cardíaca e possíveis distúrbios respiratórios, proporcionando uma análise mais precisa e abrangente do sono. O objetivo é superar as limitações dos métodos tradicionais, promovendo uma compreensão mais profunda dos padrões de sono para melhorar a saúde geral.</p>
            </aside>
            <aside className="aside2">
                <h2>O que ela fará</h2>
            </aside>
            <aside className="aside3">
                <h2>Como funcionará</h2>
            </aside>
            <article className="article1">
            <Image  src='/logo.png'
                    style={{height:"250px", marginRight:"5px", marginLeft:"5px"}}
                    roundedCircle
                    />
            </article>
            <article className="article2">
                <h2>Texto sobre a solução (20 a 30 palavras)</h2>
            </article>

            <Card style={{ width: '18rem' }}>
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
    )
}