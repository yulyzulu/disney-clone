import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../views/Login';
import Header from '../components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
