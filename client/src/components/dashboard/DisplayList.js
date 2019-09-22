import React, { Component } from "react";

import DataFetch from "./DataFetch";
import RenderTable from "./RenderTable";

class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    handleFetch = async () => {
        let response = await DataFetch();
        this.setState({ data: response.data });
    };

    render() {
        return (
            <div className="container mt-2">
                <div className="container">
                    <button className="btn btn-warning" onClick={this.handleFetch}>
                        Load the data
          </button>
                </div>
                <div className="container mt-4" />
                <table className="dataTable">
                    <tbody>
                        <tr>
                            <th>Learner</th>
                            <th>Verb</th>
                            <th>Activity</th>
                            <th>Date</th>
                        </tr>
                        <RenderTable data={this.state.data} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DisplayList;
