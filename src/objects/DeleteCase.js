import React,{useEffect,useState} from 'react';
import axios from 'axios';

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

    useEffect(() => {
        if (state.length>0)
        setLoad(true)
        
     }, [state]);

     return (
        <div>
            <meta http-equiv="refresh" content="0; URL='http://localhost:3000/DisplayCases'" />
        </div>
    )
}

export default Func_DeleteCase;