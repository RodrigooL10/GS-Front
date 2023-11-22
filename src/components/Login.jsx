import "./Login.scss"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Login(){

    const [msgstatus, setMsgstatus] = useState("");
    const [classStatus, setClassStatus] = useState("");
    
    const navigate = useNavigate()
  //Vai receber os dados do FORMULÁRIO!!!
  //É um OBJETO!!!
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = async (e) => {
    //Destructuring
    const { name, value } = e.target;
    //Preenchendo o Objeto através do
    //useState utilizando o evento OnCHange e
    //Operador SPREAD(...)
    setUsuario({ ...usuario, [name]: value });
  };

    
    useEffect(() => {

        if(msgstatus == "Login realizado com SUCESSO!!"){
            setClassStatus("login-sucesso");
        }else if(msgstatus == "Usuário e ou Senha incorretos!"){
          setClassStatus("login-erro");
        }else{
          setClassStatus("login");
        }


    }, [msgstatus])
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Esta variável vai se transformar em um objeto que será retornado junto com o
    // token do usuário, para que dos dados pertinentes sejam apresentados na tela.
    let user;

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();
        // console.log(users);
        for (let x = 0; x < users.length; x++) {
          const u = users[x];
        
        if (usuario.email === "admin" && usuario.senha === "123456") {
            navigate('/adm');
            return
        }

          //Realizando a validação de fato;
          if (u.email == usuario.email && u.senha == usuario.senha) {
            user = u;
            break;
          }
        }
        if (user) {
            
           // Se o login for "adm" e a senha "12345", redirecione para a página desejada

          //Redirecionando o usuário para HOME!
          setMsgstatus("Login realizado com SUCESSO!!");
          
          //Gerar o token do usuário na sessionStorage.
          //Vamos utilizar Math.Randon com uma string alfanúmerica.
          const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

          //Armazenar o token na sessionStorage
          //Para isso vamos utilizar o método setItem(chave, valor).
          //Precisamos lembrar que tudo o que adicionamos na sessionStorage e ou localStorage deve ser do tipo String. Neste caso o token é uma String então não existe a necessidade de realizar uma conversão por exemplo utilizando a função JSON.stringify(objeto).
          sessionStorage.setItem("token-user", token);

          //Adicionando o objeto do usuário na sessionStorage.
          sessionStorage.setItem("user-obj", JSON.stringify(user));

          setTimeout(()=>{
              navigate("/home");
            },5000);
          
        } else {
          //Limpando o form caso a validação falhe!

          setMsgstatus("Usuário e ou Senha incorretos!");
            
          setTimeout(()=>{

            setMsgstatus("");

            setUsuario({
                email: "",
                senha: "",
              });

              window.location = "/";
            },5000);
          
        }
      } else {
        //Limpando o form caso a validação falhe!
        setUsuario({
          email: "",
          senha: "",
        });
        window.location = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };


    return(
        <div className="formLogin">
            <h1 id="LoginTitulo">Login</h1>

                <h2 className={classStatus}> {msgstatus} </h2>
                
            <form className="formCom" onSubmit={handleSubmit}>
                <label htmlFor="idEmail">Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    id="idEmail" 
                    value={usuario.email} 
                    onChange={handleChange}
                />

                <label htmlFor="senha">Senha:</label>
                <input 
                    type="senha" 
                    name="senha" 
                    id="idSenha" 
                    onChange={handleChange}/>

                <input type="submit" id="entrar" value="Entrar"/>
            </form>
            <p>Ainda não possui uma conta? <Link id="links" to="/cadastro">CLIQUE AQUI</Link></p>
        </div>
    )
}