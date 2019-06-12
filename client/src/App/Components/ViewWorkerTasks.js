import React, { Component } from "react";
import { Table, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';

class ViewWorkerTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            assets: [
            ]
        };
    }
    async componentDidMount() {
        axios.get('/assets/all')
            .then((res) => {
                this.setState({
                    assets: res.data
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
                                    <th>Asset Name</th>
                                    <th>Asset Id</th>
                                    <th>Asset Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.assets.map(asset => <tr>
                                    <td>{asset.name}</td>
                                    <td>{asset.assetId}</td>
                                    <td>{asset.description}</td>
                                </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </ Container >
        )
    }
}

export default ViewWorkerTask