import React, {useEffect, useState } from "react";
import axios from 'axios';

function Case_UpDateForm(props) {
  const url = 'http://localhost:8080/CovidDatabase'
  const [state, setState] = useState({
    date: "",
    county: "",
    state: "",
    cases:"",
    deaths: "",
  });

  const [StatedLoaded, Set_StatedLoaded]=useState(false)
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    axios.get(url+'/getcase/'+props.match.params.id)
        .then(res => {
            setState(res.data)
        })
        .catch(err => {
          console.log("Error: " + err)
        })
}, []);

useEffect(() => {
    if (state.length>0)
    Set_StatedLoaded(true)
 }, [state]);

 
  const OnSubmit=(e) =>
   {
    e.preventDefault();
    const casedata={
            date:state.date,
            county:state.county,
            state:state.state,
            cases:state.cases,
            deaths:state.deaths

    }
    
    axios.post(url+"/update/"+props.match.params.id, casedata)
    .then(res => console.log(res.data));
   }
  return (
    <div style={{marginTop: 10}}>
      <h3> Update Case Id: {props.match.params.id}</h3>
      <form onSubmit={OnSubmit} method="Post">
        <div className="form-group"> 
          <label>Date: </label>
          <input  className="form-control"
            type="text" name="date"
            value={state.date}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>County: </label>
          <input  className="form-control"
            name="county"value={state.county}
            onChange={handleChange}/>
        </div>
        <div className="form-group"> 
          <label>State: </label>
          <input  className="form-control"
            type="text" name="state"
            value={state.state}
            onChange={handleChange}/>
        </div>
        <div className="form-group"> 
          <label>Cases: </label>
          <input  className="form-control"
            type="text" name="cases"
            value={state.cases}
            onChange={handleChange}/>
        </div>
        <div className="form-group"> 
          <label>Deaths: </label>
          <input  className="form-control"
            type="text" name="deaths"
            value={state.deaths}
            onChange={handleChange}/>
        </div>
        
        <div className="form-group">
        <center>
            <input type="submit" value="Add this case" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      
    </div>
  );
}

export default Case_UpDateForm;