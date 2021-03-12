import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import Nomatch from './components/NoMatch/NoMatch';



function App() {
  
  return (
    <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/league/:idLeague">
                <LeagueDetail></LeagueDetail>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <Nomatch></Nomatch>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;