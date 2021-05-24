import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/home';
import More from "./pages/more";
import Login from './pages/login';
import Dashboard from "./pages/dashboard";
import LetsStart from './pages/start';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/more">
          <More />
        </Route>
        <Route exact path="/start">
          <LetsStart />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
