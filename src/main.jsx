import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


//BLOCO DE ROTAS
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Cadastro from './components/Cadastro.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>, 
   children:[
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/cadastro", element:<Cadastro/>}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
