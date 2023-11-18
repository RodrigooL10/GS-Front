import "./Login.scss"

export default function Login(){
    return(
        <div className="formLogin">
            <h1 id="LoginTitulo">Login</h1>
            <form className="formCom">
                <label htmlFor="usuario">Nome do usuário:</label>
                <input type="text" id="usuario" required/>
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" required/>
                <input type="submit" id="entrar" value="Entrar"/>
            </form>
            <p>Ainda não possui uma conta?</p>
        </div>
    )
}