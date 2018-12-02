import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Resume from './components/Resume';
import App from './App';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;