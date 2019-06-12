import React, { Component } from "react";
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios';

class AddWorker extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            assetsId: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(value) {
        this.setState({
            name: value
        })
    }
    handleAgeChange(value) {
        this.setState({
            age: value
        })
    }
    handleAssetChange(value) {
        let assetArr = value.split(',')
        this.setState({
            assetsId: assetArr
        })
    }
    handleSubmit() {
        let worker = {
            name: this.state.name,
            age: this.state.age,
            assetsId: this.state.assetsId,
            workerId: this.state.name.split(' ').slice(0, -1).join(' ') + Date.now()
        }
        console.log(worker)
        if (worker.name !== '') {
            axios.post('/add-worker', worker)
                .then((res) => {
                    alert("Worker is added!")
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
                    <Card.Header>Add worker</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAssetName">
                                <Form.Label>Worker Name</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleNameChange(e.target.value) }}
                                    type="text" placeholder="Enter assetname" />
                            </Form.Group>
                            <Form.Group controlId="formAge">
                                <Form.Label>Worker Age</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleAgeChange(e.target.value) }}
                                    type="text" placeholder="Enter age" />
                            </Form.Group>
                            <Form.Group controlId="formWorkerAsset">
                                <Form.Label>Asset related for worker</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleAssetChange(e.target.value) }}
                                    type="text" placeholder="separated by , " />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add new worker
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default AddWorker