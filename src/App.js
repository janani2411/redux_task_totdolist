import "./App.css";
import Header from "./components/Header";
import TaskListing from "./components/TaskListing";
import TaskAddForm from "./components/TaskAddForm";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import ProtectedRoute from "../src/redux/protectedRoute";
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
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/signin" />
          </Route>
          <Route path="/signup" exact component={SignUpForm} />
          <Route path="/signin" exact component={SignInForm} />
          <ProtectedRoute path="/addTask" exact>
            <TaskAddForm />
          </ProtectedRoute>
          <ProtectedRoute path="/alltasks" exact>
            <TaskListing />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
