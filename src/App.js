import './App.css';
import {BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
            <Link exact to='/register'>
              <button>Go to register</button>
            </Link>
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
