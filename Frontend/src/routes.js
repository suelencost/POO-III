import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainFuncionario from './pages/Funcionario/main';
import DetalhesFuncionario from './pages/Funcionario/detalhes';
import CriarFuncionario from './pages/Funcionario/criar';
import DeletarFuncionario from './pages/Funcionario/deletar';
import EditarFuncionario from './pages/Funcionario/editar';

import MainProjeto from './pages/Projeto/main';
import DetalhesProjeto from './pages/Projeto/detalhes';
import CriarProjeto from './pages/Projeto/criar';
import DeletarProjeto from './pages/Projeto/deletar';
import EditarProjeto from './pages/Projeto/editar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/Funcionario" component={MainFuncionario} />
            <Route path = "/DetalhesFuncionario/:id" component={DetalhesFuncionario} />
            <Route path = "/CriarFuncionario/" component={CriarFuncionario} />
            <Route path = "/DeletarFuncionario/:id" component={DeletarFuncionario} />
            <Route path = "/EditarFuncionario/:id" component={EditarFuncionario} />

            <Route exact path = "/Projeto" component={MainProjeto} />
            <Route path = "/DetalhesProjeto/:id" component={DetalhesProjeto} />
            <Route path = "/CriarProjeto/" component={CriarProjeto} />
            <Route path = "/DeletarProjeto/:id" component={DeletarProjeto} />
            <Route path = "/EditarProjeto/:id" component={EditarProjeto} />
        </Switch>
    </BrowserRouter>
)

export default Routes;