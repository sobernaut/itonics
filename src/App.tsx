import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './store';
import { Header, Home, Results } from './components';

import './styles/main.scss';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="*" component={() => <div>404 Error</div>} />
        </Switch>
      </Router>
    </Provider>
  )
}
