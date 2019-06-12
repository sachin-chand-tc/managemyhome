import React, { Component } from "react";
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios';

class AddTask extends Component {


    constructor(props) {
        super(props);

        this.state = {
            description: '',
            assetId: '',
            frequency: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDescriptionChange(value) {
        this.setState({
            description: value
        })
    }
    handleAssetIdChange(value) {
        this.setState({
            assetId: value
        })
    }
    handleFrequencyChange(value) {
        this.setState({
            frequency: value
        })
    }
    handleSubmit() {
        let task = {
            description: this.state.description,
            assigned: false,
            taskId: Date.now(),
            assetId: this.state.assetId,
            frequency: this.state.frequency
        }
        if (task.description !== '' && task.assetId !== '' && task.frequency !== '') {
            axios.post('/add-task', task)
                .then((res) => {
                    alert("Task is added")
                })
                .catch((err) => {
                    console.error()
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
                    <Card.Header>Add task</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formTask">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleDescriptionChange(e.target.value) }}
                                    type="text" placeholder="Enter description" />
                            </Form.Group>
                            <Form.Group controlId="formAssetId">
                                <Form.Label>AssetId</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleAssetIdChange(e.target.value) }}
                                    type="text" placeholder="Enter assetId" />
                            </Form.Group>
                            <Form.Group controlId="formFrequency">
                                <Form.Label>Frequency</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleFrequencyChange(e.target.value) }}
                                    type="text" placeholder="one time or daily" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add new task
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default AddTask