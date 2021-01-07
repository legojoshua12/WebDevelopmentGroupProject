import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Case_Form from "./objects/AddCase"
import ShowCasesList from "./objects/DisplayCases.js"
import Case_UpDateForm from "./objects/CovidUpdate"
import Func_DeleteBook from "./objects/DeleteCase"
import ShowOSInfo from "./objects/GetOSInformation"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <center><h2> On-Line Covid Database using React   </h2> </center>
           <br/>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link to="/" className="navbar-brand"><h4>Add Case Information</h4></Link>
            <Link to="/ShowOSInfo" className="navbar-brand"><h4>Show OS Info</h4></Link>
            <Link to="/DisplayCases" className="navbar-brand"><h4>Display All Covid Data</h4> </Link>
            
            </nav>
          <br/>
          <Route path="/" exact component={Case_Form} />
          <Route path="/edit/:id" component={Case_UpDateForm} />
          <Route path="/Delete/:id" component={Func_DeleteBook} />
          <Route path="/DisplayCases" component={ShowCasesList} /> 
          <Route path="/ShowOSInfo" component={ShowOSInfo} />
        </div>
      </Router>
    );
  }
}

export default App;