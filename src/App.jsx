import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"
import { Outlet } from "react-router-dom"
import GlobalStyle from "./estiloGlobal.js"
import "./App.scss"


function App() {

  return (
    <>
      <GlobalStyle/>
      <Cabecalho/>
        <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
