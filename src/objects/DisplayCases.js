import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Booksdata = props => (
    <tr>
        <td>{props.book.date}</td>
        <td>{props.book.deaths}</td>
        <td>{props.book.county}</td>
        <td>{props.book.state}</td>
        <td>{props.book.cases}</td>
        <td>
            <Link to={"/edit/"+props.book._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/Delete/"+props.book._id}>Delete</Link>
        </td>
    </tr>
)

export default class ShowBooksList extends Component {

    constructor(props) {
        super(props);
        this.state = { books:[] };
    }
    componentDidMount() {
        axios.get('http://localhost:8080/CovidDatabase/')
            .then(res => {
                const books = res.data;
                this.setState({ books });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    Show_Books() {
        const booksArray = Object.values(this.state);
        const data={date: "w", county: "place", state: "texas", cases: "2", deaths: "0"};
        return booksArray[0].map(function (currentbook, i) {
            return <Booksdata book={currentbook} key={i}/>;
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
                        { this.Show_Books() }
                    </tbody>
                </table>
            </div>
        )
    }
}