import './App.css';
import Body from './components/Body';
import { Route, Switch } from 'react-router-dom';
import RemindMe from './components/RemindMe';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route path="/start">
          <RemindMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
