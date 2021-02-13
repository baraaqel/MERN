import './App.css';
import {Router} from "@reach/router";
import React, { useState } from 'react';

import AuthorsTable from "./components/AuthorsTable"
import CreateAuthorForm from "./components/CreateAuthorForm"

function App() {

  return (
      <div className="App">
        <Router>
          <AuthorsTable path="/"/>
          <CreateAuthorForm path="/new"/>
        </Router>
      </div>
  );
}

export default App;