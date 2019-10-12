import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UApp from "./components/userFolder/UApp"
import HomePage from "./components/CSS/HomePage"
import SingleU from './components/userFolder/SingleU';
import SingleBL from './components/bucketListFolder/SingleBL';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
            {/* <Link to ="/">  Home  </Link> 
            <Link to ="/user/" >  Users  </Link>  */}
          <Switch>
          <Route exact path="/user/" component={HomePage} />
          <Route exact path="/user/:userId" component={SingleU} />
          <Route exact path="/bucketlistitem/:bucketId" component={SingleBL} />
          </Switch>
        </Router>
      </div>
    )
  }
}