import React, { Component } from "react";
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios';

class AllocateTask extends Component {


    constructor(props) {
        super(props);

        this.state = {
            workerId: '',
            taskId: '',
            AssetId: '',
            date: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleWorkerIdChange(value) {
        this.setState({
            workerId: value
        })
    }
    handleAssetIdChange(value) {
        this.setState({
            assetId: value
        })
    }
    handleTaskIdChange(value) {
        this.setState({
            taskId: value
        })
    }
    handleDateChange(value) {
        this.setState({
            date: value
        })
    }


    handleSubmit() {
        let task = {
            workerId: this.state.workerId,
            taskId: this.state.taskId,
            assetId: this.state.assetId
        }
        if (task.workerId !== '') {
            axios.post('/allocate-task', task)
                .then((res) => {
                    alert(res.status)
                    if (res.status === 200) alert("Task is allocated")
                    else alert("Please check all credentials again")
                })
                .catch((error) => {
                    console.log(error)
                    alert("Please check all credentials again")
                })
        }
        else {
            alert("Please fill all details")
        }
    }

    render() {
        return (
            < div style={{ marginTop: '50px' }}>
                <Card >
                    <Card.Header>AllocateTask</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formWorkerId">
                                <Form.Label>WorkerId</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleWorkerIdChange(e.target.value) }}
                                    type="text" placeholder="worker id" />
                            </Form.Group>
                            <Form.Group controlId="formAssestsType">
                                <Form.Label>Task id</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleTaskIdChange(e.target.value) }}
                                    type="text" placeholder="task id " />
                            </Form.Group>
                            <Form.Group controlId="formAssetType">
                                <Form.Label>Asset id</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleAssetIdChange(e.target.value) }}
                                    type="text" placeholder="asset id " />
                            </Form.Group>
                            <Form.Group controlId="formAssetType">
                                <Form.Label>End date</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleDateChange(e.target.value) }}
                                    type="text" placeholder="date " />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Allocate Task
                                    </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default AllocateTask