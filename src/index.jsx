import React from 'react';
import ReactDOM from 'react-dom';
import ExpertResearcherPage from './main/Pages/expertResearcher';

function App() {
  return (
    <div className="app">
      <ExpertResearcherPage />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
