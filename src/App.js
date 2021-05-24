import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import MedsForm from './components/MedsForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Body />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/more">
          <MedsForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
