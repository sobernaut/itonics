import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AddResult from './AddResult';
import ResultsList from './ResultsList';

export default function Results() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={ResultsList} />
      <Route path={`${path}/:resultId`} component={AddResult} />
    </Switch>
  )
}
