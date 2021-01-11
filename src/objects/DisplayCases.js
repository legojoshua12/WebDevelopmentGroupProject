import React, { Component } from 'react';
import axios from 'axios';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

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

    Get_Cases() {
        const casesArray = Object.values(this.state);
        return casesArray[0].map(function (currentcase, i) {
            let urledit = "/edit/" + currentcase._id;
            currentcase.edit = (<React.Fragment><a href={urledit}>Edit</a></React.Fragment>);
            let urldelete = "/Delete/" + currentcase._id;
            currentcase.delete = (<React.Fragment><a href={urldelete}>Delete</a></React.Fragment>);
            return currentcase;
        });
    }

    render() {

        const columns = [
            { dataField: "_id", text: "", hidden: true},
            { dataField: "date", text: "Date" },
            { dataField: "deaths", text: "Deaths" },
            { dataField: "county", text: "County" },
            { dataField: "state", text: "State" },
            { dataField: "cases", text: "Cases", filter: textFilter() },
            { dataField: "edit", text: "Edit" },
            { dataField: "delete", text: "Delete" }
        ]

        const pagination = paginationFactory({
            page: 2,
            sizePerPage: 10,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
          });

        return (
            <div>
                <h3>Cases List</h3>
                <BootstrapTable
                    keyField="_id"
                    data={this.Get_Cases()}
                    columns={columns}
                    pagination={pagination}
                    filter={ filterFactory() }
                    ref='table'
                />
            </div>
        )
    }
}