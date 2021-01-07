import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Casesdata = props => (
    <tr>
        <td>{props.case.date}</td>
        <td>{props.case.deaths}</td>
        <td>{props.case.county}</td>
        <td>{props.case.state}</td>
        <td>{props.case.cases}</td>
        <td>
            <Link to={"/edit/"+props.case._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/Delete/"+props.case._id}>Delete</Link>
        </td>
    </tr>
)
function Func_DeleteCase(props) {
    const [state, setState] = useState({
        date: "",
        county: "",
        cases: "",
        state:"",
        deaths: "",
      
    });
    const [IsLoad, setLoad]=useState(false)
    const [IsDeleted,setDelete]=useState(false)
    const url = 'http://localhost:8080/CovidDatabase'
   
    useEffect(()=>{
        axios.delete(url+"/deletecase/"+props.match.params.id)
        .then(res => {
            setDelete(true)
            axios.get(url)
            .then(res => {
                setState(res.data)
            })
            .catch(err => {
              console.log("Error: " + err)
            })
                      }) 
        .catch(err => {
          console.log("Error: " + err)
        })
    },[props.match.params.id])
    
    function ShowCasesTable() {
        return state.map(function(currentcase, i){
            return <Casesdata case={currentcase} key={i} />;
        })
    }

    useEffect(() => {
        if (state.length>0)
        setLoad(true)
        
     }, [state]);

     return (
        <div>
            <h3>Deleted Cases </h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Deaths</th>
                        <th>County</th>
                        <th>State</th>
                        <th>Cases</th>
                    </tr>
                </thead>
                <tbody>
                    { IsLoad ? ShowCasesTable() : console.log("No table data")}
                </tbody>
            </table>
        </div>
    )
}

export default Func_DeleteCase;