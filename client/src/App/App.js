import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/Navbar'
import ViewAsset from './Components/ViewAsset'
import ViewWorker from './Components/ViewWorker';
import ViewTask from './Components/ViewTask';
import Dashboard from './Components/Dashboard';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/view-asset' component={ViewAsset} />
          <Route path='/view-worker' component={ViewWorker} />
          <Route path='/view-task' component={ViewTask} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
