import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './paginas/Home/Home';
import Login from "./paginas/Login/Login"
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <NavBar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/cadastrousuario">
            <CadastroUsuario />
          </Route>

          <Route path="/tema">
            <ListaTema />
          </Route>

          <Route path="/postagens">
            <ListaPostagem />
          </Route>

          <Route exact path="/formularioPostagem"> {/*Cadastrar Postagem */}
            <CadastroPostagem />
          </Route>

          <Route exact path="/formularioPostagem/:id"> {/*Atualizar Postagem pelo id*/}
            <CadastroPostagem />
          </Route>

          <Route exact path="/formularioTema"> {/*Cadastrar Tema */}
            <CadastroTema />
          </Route>

          <Route exact path="/formularioTema/:id"> {/*Atualizar Tema pelo id*/}
            <CadastroTema />
          </Route>

          <Route path="/deletarPostagem/:id"> {/*Deletar Postagem pelo id*/}
            <DeletarPostagem />
          </Route>

          <Route path="/deletarTema/:id"> {/*Deletar Tema pelo id */}
            <DeletarTema />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
