import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./objects/AddCase"
import ShowBooksList from "./objects/DisplayCases.js"
import Book_UpDateForm from "./objects/CovidUpdate"
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
            <Link to="/DisplayBooks" className="navbar-brand"><h4>Display All Covid Data</h4> </Link>
            
            </nav>
          <br/>
          <Route path="/" exact component={Book_Form} />
          <Route path="/edit/:id" component={Book_UpDateForm} />
          <Route path="/Delete/:id" component={Func_DeleteBook} />
          <Route path="/DisplayBooks" component={ShowBooksList} /> 
          <Route path="/ShowOSInfo" component={ShowOSInfo} />
        </div>
      </Router>
    );
  }
}

export default App;