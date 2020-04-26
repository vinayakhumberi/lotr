import React from 'react';
import Routes from './config/config.routes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {Routes.map(route => (
            <Route
              key={route.id}
              path={route.path}
              render={route.component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

