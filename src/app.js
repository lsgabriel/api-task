import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';

const App = () =>{
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </HashRouter>
    );
}

export default App;