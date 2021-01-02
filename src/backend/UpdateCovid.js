import React, {useEffect, useState } from "react";
import axios from 'axios';

function Covid_UpDateForm(props) {
  const [state, setState] = useState({
    date: "",
    county: "",
    state: "",
    cases:"",
    deaths: "0",
  });

  const [StatedLoaded, Set_StatedLoaded]=useState(false)
  let url= "http://localhost:5000/"
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

useEffect(() => {
    axios.get('http://localhost:5000/getcovid/'+props.match.params.id)
        .then(res => {
            setState(res.data)
        }).catch(err => {
          console.log("error has occured")
        })
}, []);

useEffect(() => {
    if (state.length>0)
    Set_StatedLoaded(true)
 }, [state]);

 
  const OnSubmit=(e) =>
   {
   
    e.preventDefault();
    const coviddata={
        date:state.date,
        county:state.county,
        state:state.state,
        cases:state.cases,
        deaths:state.deaths
    }
    
    axios.post(url+"updatecovid/"+props.match.params.id, coviddata)
    .then(res => console.log(res.data));
    

   }
  return (
    <div style={{marginTop: 10}}>
        <h3> Update Covid Id: {props.match.params.id}</h3>
        <form onSubmit={OnSubmit} method="Post">
        <div className="form-group"> 
            <label>Covid Date Information: </label>
            <input  className="form-control" type="text" name="coviddate"
                value={state.coviddate}
                onChange={handleChange}
            />
        </div>

        <div className="form-group"> 
          <label>Covid County Information: </label>
          <input  className="form-control" type="text" name="covidcounty"
            value={state.covidcounty}
            onChange={handleChange}
          />
        </div>

        <div className="form-group"> 
          <label>Covid State Information: </label>
          <input  className="form-control" type="text" name="covidstate"
            value={state.covidstate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group"> 
          <label>Covid Cases Information: </label>
          <input  className="form-control" type="text" name="covidcases"
            value={state.covidcases}
            onChange={handleChange}
          />
        </div>

        <div className="form-group"> 
          <label>Covid Deaths Information: </label>
          <input  className="form-control" type="text" name="coviddeaths"
            value={state.coviddeaths}
            onChange={handleChange}
          />
        </div>
        
        <center>
            <div className="form-group">
                <input type="submit" value="UpDate" className="btn btn-primary" />
            </div>
        </center>            
      </form>
      
    </div>
  );
}

export default Covid_UpDateForm;