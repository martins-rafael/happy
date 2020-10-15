import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './views/Landing';
import OrphanagesMap from './views/OrphanagesMap';
import CreateOrphanage from './views/CreateOrphanage';
import Orphanage from './views/Orphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;