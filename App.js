import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Covid_Form from "./components/AddCases"
import DisplayCovid from "./components/DisplayCases.js"
import Covid_Update from "./components/CovidUpdate"
import DeleteCase from "./components/DeleteCase"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <center><h1>On-Line COVID database using REACT</h1></center>
           <br/>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link to="/" className="navbar-brand"><h4>Add COVID information</h4></Link>
            <Link to="/edit/:id" className="navbar-brand"><h4>Update COVID information</h4></Link>
            <Link to="/Delete/:id" className="navbar-brand"><h4>Delete COVID information</h4></Link>
            <Link to="/DisplayCovid" className="navbar-brand"><h4>Display all cases</h4></Link>
            </nav>

          <br/>
          <Route path="/" component={Covid_Form} />
          <Route path="/edit/:id" component={Covid_Update} />
          <Route path="/Delete/:id" component={DeleteCase} />
          <Route path="/DisplayCovid" component={DisplayCovid} /> 
        </div>
      </Router>
    );
  }
}

export default App;