import React, { useState } from "react";
import axios from 'axios';

function Book_Form() {
  let url= "http://localhost:5000/" 
  const [state, setState] = useState({
    date: "",
    county: "",
    state: "",
    cases:"",
    deaths: 1990,
  });

 
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const OnSubmit=(e) =>
  {
  
   e.preventDefault();
   const bookdata={
           date:state.date,
           deaths:state.deaths,
           county:state.county,
           cases:state.cases,
           state:state.state

   }
   
   axios.post(url+"addbooks", bookdata)
   .then(res => console.log(res.data));
   }
  return (
    <div style={{marginTop: 10}}>
      <h3>Add Book</h3>
      <form onSubmit={OnSubmit} method="Post">
        <div className="form-group"> 
          <label>Date: </label>
          <input  className="form-control"
            type="text" name="date"
            value={state.date}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Counties: </label>
          <input  className="form-control"
            name="county"value={state.county}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>
            Cases:{" "}
            <select className="form-control"
            name="cases" value={state.cases}
            onChange={handleChange}>
            <option value="Computer Science">CS</option>
            <option value="Programming" >Programming</option>
            <option value="Data Science">Data Sceince</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
          </label>
        </div>
        <div className="form-group">
        <label>State: </label>
        <div className="form-check form-check-inline">
          <input className="form-check-label"
            type="radio" name="state" value="Hard Copy"
            checked={state.state === "Hard Copy"}
            onChange={handleChange} />
         <label className="form-check-label"> Hard Copy </label>
         </div>
         <div className="form-check form-check-inline">
         <input className="form-check-label"
            type="radio"name="state" value="Electronic Copy"
            checked={state.state === "Electronic Copy"}
            onChange={handleChange}
          />
         <label className="form-check-label"> Electronic Copy</label>
        </div>
        </div>  
        <div>
        <label>
          Deaths (between 0 and 2000):
          <input
            type="range"name="deaths"
            min="0"max="2000" value={state.deaths}
            onChange={handleChange} />
        </label>
        </div>
        
        <div className="form-group">
        <center>
            <input type="submit" value="Add this book" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      
    </div>
  );
 
}

export default Book_Form;