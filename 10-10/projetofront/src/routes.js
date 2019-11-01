import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainEvento from './pages/evento/main';
import DetalheEvento from './pages/evento/detalhes';
import CriarEvento from './pages/evento/criar'
import EditarEvento from './pages/evento/editar';
import DeletarEvento from './pages/evento/deletar';


import MainUsuario from './pages/usuario/main';
import DetalheUsuario from './pages/usuario/detalhes';
import CriarUsuario from './pages/usuario/criar';
import EditarUsuario from './pages/usuario/editar';
import DeletarUsuario from './pages/usuario/deletar';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/evento" component={MainEvento} />
            <Route path="/evento/criar" component={CriarEvento} />
            <Route path="/evento/detalhe/:id" component={DetalheEvento} />
            <Route path="/evento/editar/:id" component={EditarEvento}/>
            <Route path="/evento/deletar/:id" component={DeletarEvento}/>
            <Route exact path="/usuario" component={MainUsuario} />
            <Route path="/usuario/detalhe/:id" component={DetalheUsuario} />
            <Route path="/usuario/criar" component={CriarUsuario} />
            <Route path="/usuario/editar/:id" component={EditarUsuario}/>
            <Route path="/usuario/deletar/:id" component={DeletarUsuario}/>

        </Switch>
    </BrowserRouter>
)

export default Routes;