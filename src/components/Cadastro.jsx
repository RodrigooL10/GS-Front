import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Cadastro.scss"


export default function Cadastro() {
    const [usuario, setUsuario] = useState({
        id: null,
        nome: '',
        email: '',
        senha: '',
        dataNasc: '',
        gender: '',
    })


const navigate = useNavigate()

const handleChange = (e) => {
    const {name, value} = e.target 
    setUsuario({
        ...usuario,
        [name]:value,
    })
}


const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/usuarios')
        .then((response) => response.json())
        .then((data) => {
            const existingIds = data.map((produto) => produto.id);
            const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
            const id = maxId + 1;
    
            const post_data = {
            id,
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            dataNasc: usuario.dataNasc,
            gender: usuario.gender,
            };
            
        fetch('http://localhost:5000/usuarios', {
            method: 'POST',
            body: JSON.stringify(post_data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            })
        .then((response) => {
            console.log("STATUS DA REQUISIÇÃO: "+ response.status)
            if (response.status === 201) {
                alert("Usuário cadastrado com sucesso!");
                // Redirect
                navigate("/");
              } else {
                alert("Erro ao cadastrar usuário");
                navigate('/cadastro');
              }

        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => console.error(error))
    })
    .catch((error) => console.error(error))
    
}

    return(
        <div id="cadastro" className="cadastro">
        <form id="formCadast" className="formCadast" onSubmit={handleSubmit}>
          <h1 id="CadastroTitulo">Cadastro</h1>
          <label htmlFor="username">Nome de usuário:</label><br />
          <input
            type="text"
            id="username"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            required
          /><br />
          <label htmlFor="email">E-mail:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          /><br />
          <label htmlFor="password">Senha:</label><br />
          <input
            type="password"
            id="password"
            name="senha"
            value={usuario.senha}
            onChange={handleChange}
            required
          /><br />
          <label htmlFor="dob">Data de Nascimento:</label><br />
          <input
            type="date"
            id="dob"
            name="dataNasc"
            value={usuario.dataNasc}
            onChange={handleChange}
            required
          /><br /><br />
          <label htmlFor="gender">Gênero:</label><br />
          <select
            id="gender"
            name="gender"
            value={usuario.gender}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Outro</option>
          </select><br /><br />
          <input id="cadastrar" type="submit" value="Cadastrar" />
          <p id="jaTem">Já possui uma conta? <Link id="links" to="/">CLIQUE AQUI</Link></p>
        </form>
      </div>
    )
}

