import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

export default class ShowCasesList extends Component {

    constructor(props) {
        super(props);
        this.state = { cases:[] };
    }
    componentDidMount() {
        axios.get('http://localhost:8080/CovidDatabase/')
            .then(res => {
                const cases = res.data;
                this.setState({ cases });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    Show_Cases() {
        const casesArray = Object.values(this.state);
        return casesArray[0].map(function (currentcase, i) {
            return <Casesdata case={currentcase} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3>Cases List</h3>
                <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
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
                        { this.Show_Cases() }
                    </tbody>
                </table>
            </div>
        )
    }
}