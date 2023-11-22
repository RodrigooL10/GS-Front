import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


//BLOCO DE ROTAS
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Cadastro from './components/Cadastro.jsx';
import Adm from './components/Adm.jsx';
import Erro404 from './components/Erro404.jsx';
import ExcluirUsuarios from './components/Excluir.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Erro404/>, 
   children:[
    {path:"/", element:<Login/>},
    {path:"/home", element:<Home/>},
    {path:"/cadastro", element:<Cadastro/>},
    {path:"/adm", element:<Adm/>},
    {path:"/excluir/usuarios/:id", element:<ExcluirUsuarios/>},

  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
