import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Coviddata = props => (
    <tr>
        <td>{props.Covid.date}</td>
        <td>{props.Covid.county}</td>
        <td>{props.Covid.state}</td>
        <td>{props.Covid.cases}</td>
        <td>{props.Covid.deaths}</td>
        <td>
            <Link to={"/edit/"+props.Covid._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/Delete/"+props.Covid._id}>Delete</Link>
        </td>
    </tr>
)
function Func_DeleteCovid(props) 
 {
    const [state, setState] = useState({
        date: "",
        county: "",
        state: "",
        cases:"",
        deaths: "0",
      
    });
    const [IsLoad, setLoad]=useState(false)
    const [IsDeleted,setDelete]=useState(false)
   
    useEffect(()=>{
        console.log("useeff delete"+props.match.params.id)
        axios.post("http://localhost:5000/deleteCovid/"+props.match.params.id)
        .then(res => {
            console.log("data deleted "+res.data)
            setDelete(true)
            axios.get("http://localhost:5000/allcovid")
            .then(res => {
                console.log("data received "+res.data)
                res.data.map(function(currentstate, i){
                    console.log(currentstate)
            })      
                setState(res.data)
                console.log("data set in the state and state length"+state.length)
            })
            .catch(err => {
              console.log("error has occured")
            })
                      }) 
        .catch(err => {
          console.log("error has occured")
        })
    },[props.match.params.id])

   
    
    function ShowCovidTable() {
        return state.map(function(currentcovid, i){
           
            return <Coviddata covid={currentcovid} key={i} />;
        })
    }
    useEffect(() => {
        if (state.length>0)
        setLoad(true)
        
     }, [state]);
     
     

     return (
        <div>
            <h3>Deleted Covid Information </h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>County</th>
                        <th>State</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                       
                    </tr>
                </thead>
                <tbody>
                    { IsLoad ? ShowCovidTable() : console.log("No table data")}
                </tbody>
            </table>
        </div>
    )
    }

export default Func_DeleteCovid;