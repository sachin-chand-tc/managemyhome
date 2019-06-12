import React, { Component } from "react";
import { Table, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';

class ViewTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
            ]
        };
    }
    async componentDidMount() {
        axios.get('/tasks/all')
            .then((res) => {
                this.setState({
                    tasks: res.data
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
                                    <th>Description</th>
                                    <th>Task Id</th>
                                    <th>Asset Id</th>
                                    <th>Frequency</th>
                                    <th>Assigned</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tasks.map((task, i) => <tr key={i}>
                                    <td>{task.description}</td>
                                    <td>{task.taskId}</td>
                                    <td>{task.assetId}</td>
                                    <td>{task.frequency}</td>
                                    <td>{task.assigned === false ? 'No' : 'Yes'}
                                    </td>
                                </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </ Container >
        )
    }
}

export default ViewTask