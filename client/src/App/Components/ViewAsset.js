import React, { Component } from "react";
import { Table, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';

class ViewAsset extends Component {

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
                                    <th>Asset Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.assets.map((asset, i) => <tr key={i}>
                                    <td>{asset.name}</td>
                                    <td>{asset.assetId}</td>
                                    <td>{asset.type}</td>
                                </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </ Container >
        )
    }
}

export default ViewAsset