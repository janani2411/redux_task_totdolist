import "./App.css";
import Header from "./components/Header";
import TaskListing from "./components/TaskListing";
import TaskDetails from "./components/TaskComponent";
import TaskAddForm from "./components/TaskAddForm";
import EditTaskForm from "./components/EditTaskForm";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-sm bg-info mb-3">
          <ul className="navbar nav">
            <li className="nav-item">
              <Link
                className="navbar-brand text-warning font-weight-bold"
                to="/"
              >
                ToDo List
              </Link>
            </li>
          </ul>
          <ul className="navbar nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/addTask">
                Add Task
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/allTask">
                All Task
              </Link>
            </li>
          </ul>
        </nav> */}
        <Header />
        <Switch>
          <Route path="/addTask" exact component={TaskAddForm} />
          <Route path="/alltasks" exact component={TaskListing} />
          <Route path="/alltask/editTask" exact component={EditTaskForm} />
          {/* <Route path="/task/:taskId" exact component={TaskDetails} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
