import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../views/Login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
