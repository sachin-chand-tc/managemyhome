import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import AddAsset from './AddAsset';
import AddWorker from './AddWorker';
import AllocateTask from './AllocateTask'
import AddTask from './AddTask'

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <AddAsset />
                    </Col>
                    <Col>
                        <AddWorker />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <AllocateTask />
                    </Col>
                    <Col >
                        <AddTask />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Dashboard;