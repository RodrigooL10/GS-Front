import "./Home.scss";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { CiLogout as Logout } from "react-icons/ci";
import { IoMdAlert as Alert} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    // Função de logout
    function logout() {
        // Limpa todo o sessionStorage ao efetuar o logout
        sessionStorage.clear();
        // Redireciona para a tela de login
        navigate("/");
    }

    // Verifica se o usuário está autenticado
    const isUserAuthenticated = sessionStorage.getItem("token-user") !== null;

    if (!isUserAuthenticated) {
        // Se o usuário não estiver autenticado, redireciona para a página de login
        return (
            <div className="d-flex row">
            <Alert
                className="text-center ms-0 fs-1 text-danger"
            />
            <h5 className="text-center mt-3 mb-5">Você não fez o Login, volte e efetue o Login <Link id="links" to="/">CLIQUE AQUI</Link></h5>
            </div>
        ); // Evita a renderização do restante do componente
    }

    const userObj = JSON.parse(sessionStorage.getItem("user-obj"));
    let nomeUsuario = "Convidado";

    if (userObj) {
        nomeUsuario = userObj.nome;
        console.log(`Nome do usuário: ${nomeUsuario}`);
    } else {
        console.log("Objeto do usuário não encontrado no sessionStorage");
    }


    return(
        <div className="nomeUsuario">
            <Logout 
                onClick={logout}
                className="logoutIcon"
            />
            <h2>Bem-vindo, {nomeUsuario}!</h2>
        <div className="container">
            <main>
            <Image  src='/dreamwatch.jpg'
                    className="Imgdreamwatch"
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
                    className="logo"
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

                <h2>Recomendações para uma melhor noite de sono:</h2>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mx-auto">
                    <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./img1.jpg" />
                    <Card.Body>
                        <Card.Title>Crie um Ritual Noturno</Card.Title>
                        <Card.Text className="mx-auto text-center" >
                        Estabeleça uma rotina relaxante antes de dormir, como ler um livro ou praticar a meditação.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mx-auto">
                <Card className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./img2.jpg" />
                <Card.Body >
                    <Card.Title>Ambiente Confortável</Card.Title>
                    <Card.Text className="mx-auto text-center">
                    Mantenha o quarto escuro, silencioso e fresco para promover um sono tranquilo.
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mx-auto">
                <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src="./img3.jpg" />
                <Card.Body>
                    <Card.Title>Limite Eletrônicos</Card.Title>
                    <Card.Text className="mx-auto text-center">
                    Desconecte-se de dispositivos eletrônicos pelo menos 30 minutos antes de dormir para melhorar a qualidade do sono.
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}