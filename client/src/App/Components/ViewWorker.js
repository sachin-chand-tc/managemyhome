import React, { Component } from "react";
import { Table, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';

class ViewWorker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            workers: [
            ]
        };
    }
    async componentDidMount() {
        axios.get('/workers/all')
            .then((res) => {
                this.setState({
                    workers: res.data
                })
            })
            .catch((error) => {
                console.error(error)
            })

    }
    render() {
        return (
            < Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Assets</th>
                                    <th>Worker Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.workers.map((worker, i) => <tr key={i}>
                                    <td>{worker.name}</td>
                                    <td>{worker.age}</td>
                                    <td>{worker.assetsId.toString()}</td>
                                    <td>{worker.workerId}</td>
                                </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </ Container >
        )
    }
}

export default ViewWorker