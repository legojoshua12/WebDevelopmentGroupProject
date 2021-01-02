import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

export default class ShowCovidList extends Component {

    constructor(props) {
        super(props);
        this.state = {covid: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/allcovid/')
            .then(response => {
                console.log("response.data",response.data)
                this.setState({ covid: response.data });
                console.log("Received data",this.state.todos)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    Show_Covid() {
        return this.state.Covid.map(function(currentcovid, i){
            console.log("currentodo object-->"+currentcovid +"  i is "+i)
            return <Coviddata covid={currentcovid} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Covid List</h3>
                <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
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
                        { this.Show_Covid() }
                    </tbody>
                </table>
            </div>
        )
    }
}