import React from 'react';
import Header from '../Component/Header';
import { Route, Routes } from 'react-router-dom';
import IssueView from '../scene/Issues';
import CreateIssue from '../scene/CreateIssue';


function App() {
  return (
    <> 
      <div className="App">
        <Header/>
        <p className="panel-title">Issue Solving System</p>
        <Routes>
          <Route path="/issues/:keyword?" element={<IssueView />} />
          <Route path="/createIssue" element={<CreateIssue />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
