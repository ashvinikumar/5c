import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard.js";
import RepoDetails from "./components/Dashboard/RepoDetails/RepoDetails.js";
import { BrowserRouter } from "react-router-dom";
import Route from "react-router-dom/Route";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Dashboard} />
        <Route path="/details/:id?" component={RepoDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
