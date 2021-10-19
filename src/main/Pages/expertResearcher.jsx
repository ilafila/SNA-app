import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '../Components/NavBar/navBar';
import AddCase from '../Components/AddCase/AddCase';
import Cases from '../Components/Cases/Cases';
import './expertResearcher.css';

function ExpertResearcherPage() {
  return (
    <div className="expert-researcher-page">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/add">
            <AddCase />
          </Route>
          <Route to="/cases">
            <Cases />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default ExpertResearcherPage;
